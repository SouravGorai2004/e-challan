import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import {
    ChevronRight,
    Maximize2,
    ExternalLink,
    Lock,
    Clock,
    CheckCircle2,
    X,
} from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {
    vehicles,
    getChallan,
    markPaid,
    total,
    rupee,
} from "../data/challans.js";

const bg = (img) => ({
    backgroundImage: `url(${img.src})`,
    backgroundPosition: img.pos,
    backgroundSize: img.size,
});

function Info({ label, children }) {
    return (
        <div className="info-item">
            <span>{label}</span>
            <strong>{children}</strong>
        </div>
    );
}

function Photo({ img, label, className, onOpen }) {
    return (
        <button
            type="button"
            className={`photo ${className}`}
            onClick={() => onOpen({ img, label })}
            aria-label={`Expand ${label}`}
        >
            <div className="photo-img" style={bg(img)} />
            <span className="photo-tag">{label}</span>
            <span className="photo-expand">
        <Maximize2 size={14} />
      </span>
        </button>
    );
}

function ChallanDetailsPage() {
    const { id } = useParams();
    const [params] = useSearchParams();
    const [tick, setTick] = useState(0);
    const [paying, setPaying] = useState(false);
    const [preview, setPreview] = useState(null);
    const [highlight, setHighlight] = useState(false);
    const payRef = useRef(null);

    const challan = useMemo(() => getChallan(id), [id, tick]);
    const vehicle = challan ? vehicles[challan.vehicle] : null;

    // coming from "Pay Challan": jump to the payment card
    useEffect(() => {
        if (params.get("pay") && challan?.status === "unpaid") {
            const t = setTimeout(() => {
                payRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
                setHighlight(true);
            }, 350);
            return () => clearTimeout(t);
        }
    }, [id]);

    // close preview with Escape
    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && setPreview(null);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const scrollToPay = () => {
        payRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        setHighlight(true);
    };

    // Demo payment. Replace with your payment gateway call.
    const handlePay = () => {
        setPaying(true);
        setTimeout(() => {
            markPaid(challan.id);
            setTick((n) => n + 1);
            setPaying(false);
        }, 900);
    };

    if (!challan) {
        return (
            <>
                <Navbar />
                <main className="results-section">
                    <div className="container">
                        <div className="empty-state">
                            <h2>Challan not found</h2>
                            <p>We could not find a challan with number {id.toUpperCase()}.</p>
                            <p className="hint">Demo challan numbers: EC-2026-0001 to EC-2026-0006</p>
                            <Link to="/#check-challan" className="btn btn-primary btn-lg">
                                Try another number
                            </Link>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    const isPaid = challan.status === "paid";
    const mapQuery = encodeURIComponent(challan.address);

    return (
        <>
            <Navbar />

            <main>
                {/* HEADER */}
                <section className="page-hero compact">
                    <div className="container">
                        <div className="breadcrumb">
                            <Link to="/">Home</Link>
                            <ChevronRight size={14} />
                            <Link to="/#check-challan">Check Challan</Link>
                            <ChevronRight size={14} />
                            <span>Challan Details</span>
                        </div>
                        <h1 className="page-title small">Challan Details</h1>
                        <p className="page-desc tight">
                            Complete violation information, evidence and payment status for
                            this challan.
                        </p>
                    </div>
                </section>

                <section className="results-section">
                    <div className="container">
                        {/* SUMMARY */}
                        <div className="panel summary-card">
                            <div className="summary-top">
                                <div>
                                    <span className="muted-label">Challan Number</span>
                                    <h2>{challan.id}</h2>
                                </div>
                                <span className={`badge ${challan.status}`}>
                  {isPaid ? "Paid" : "Unpaid"}
                </span>
                            </div>

                            <div className="info-grid three">
                                <Info label="Issuing Authority">{challan.authority}</Info>
                                <Info label="Date & Time">
                                    {challan.date}, {challan.time}
                                </Info>
                                <Info label="Vehicle Number">{vehicle.number}</Info>
                                <Info label="Total Fine Amount">{rupee(total(challan))}</Info>
                            </div>

                            {!isPaid && (
                                <button className="btn btn-primary btn-lg" onClick={scrollToPay}>
                                    Pay Now
                                </button>
                            )}
                        </div>

                        <div className="details-layout">
                            {/* LEFT COLUMN */}
                            <div className="main-col">
                                {/* VEHICLE */}
                                <div className="panel">
                                    <h3>Vehicle Details</h3>
                                    <div className="vehicle-box">
                                        <div className="vehicle-img">
                                            <div className="photo-img" style={bg(vehicle.image)} />
                                        </div>
                                        <div className="info-grid">
                                            <Info label="Vehicle Number">{vehicle.number}</Info>
                                            <Info label="Make / Model">{vehicle.make}</Info>
                                            <Info label="Vehicle Type">{vehicle.type}</Info>
                                            <Info label="Colour">{vehicle.colour}</Info>
                                            <Info label="Owner">
                                                {vehicle.owner}, {vehicle.ownerCity}
                                            </Info>
                                        </div>
                                    </div>
                                </div>

                                {/* VIOLATION */}
                                <div className="panel">
                                    <h3>Violation Details</h3>
                                    <div className="info-grid">
                                        <Info label="Violation Type">{challan.violation}</Info>
                                        <Info label="Date & Time">
                                            {challan.date}, {challan.time}
                                        </Info>
                                        <Info label="Location">{challan.location}</Info>
                                        <Info label="Applicable Rule">{challan.rule}</Info>
                                        {challan.detectedSpeed && (
                                            <Info label="Detected Speed">{challan.detectedSpeed} km/h</Info>
                                        )}
                                        {challan.permittedSpeed && (
                                            <Info label="Permitted Speed">{challan.permittedSpeed} km/h</Info>
                                        )}
                                    </div>
                                    <p className="explain">{challan.explanation}</p>
                                </div>

                                {/* EVIDENCE */}
                                <div className="panel">
                                    <h3>Evidence</h3>
                                    <Photo
                                        img={challan.evidence.main}
                                        label="Main evidence"
                                        className="wide"
                                        onOpen={setPreview}
                                    />
                                    <div className="ev-row">
                                        <Photo
                                            img={challan.evidence.support[0]}
                                            label="Supporting 1"
                                            className="thumb"
                                            onOpen={setPreview}
                                        />
                                        <Photo
                                            img={challan.evidence.support[1]}
                                            label="Supporting 2"
                                            className="thumb"
                                            onOpen={setPreview}
                                        />
                                        <Photo
                                            img={challan.evidence.plate}
                                            label="Number plate"
                                            className="thumb"
                                            onOpen={setPreview}
                                        />
                                    </div>
                                    <div className="ev-meta">
                                        <span>{challan.date}, {challan.time}</span>
                                        <span>{challan.location}</span>
                                    </div>
                                </div>

                                {/* LOCATION */}
                                <div className="panel">
                                    <h3>Location</h3>
                                    <iframe
                                        className="map-frame"
                                        title="Violation location"
                                        loading="lazy"
                                        src={`https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`}
                                    />
                                    <div className="loc-row">
                                        <div>
                                            <strong>{challan.location}</strong>
                                            <p>{challan.address}</p>
                                        </div>
                                        <a
                                            className="btn btn-outline"
                                            href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            View on Maps <ExternalLink size={15} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT COLUMN */}
                            <aside className="side-col">
                                <div className="panel">
                                    <h3>Fine Details</h3>
                                    <div className="panel-row first">
                                        <span>Base fine</span>
                                        <strong>{rupee(challan.baseFine)}</strong>
                                    </div>
                                    <div className="panel-row">
                                        <span>Additional charges</span>
                                        <strong>{rupee(challan.charges)}</strong>
                                    </div>
                                    <div className="panel-row total">
                                        <span>Total amount</span>
                                        <strong>{rupee(total(challan))}</strong>
                                    </div>
                                </div>

                                <div
                                    id="payment"
                                    ref={payRef}
                                    className={`panel pay-card ${isPaid ? "done" : "due"} ${
                                        highlight && !isPaid ? "pulse" : ""
                                    }`}
                                >
                                    {isPaid ? (
                                        <>
                      <span className="pay-state ok">
                        <CheckCircle2 size={18} /> Payment Completed
                      </span>
                                            <div className="panel-row first">
                                                <span>Payment date</span>
                                                <strong>{challan.paidOn}</strong>
                                            </div>
                                            <div className="panel-row">
                                                <span>Amount paid</span>
                                                <strong>{rupee(total(challan))}</strong>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                      <span className="pay-state wait">
                        <Clock size={18} /> Payment Pending
                      </span>
                                            <div className="pay-amount">{rupee(total(challan))}</div>
                                            <button
                                                className="btn btn-primary btn-lg pay-btn"
                                                onClick={handlePay}
                                                disabled={paying}
                                            >
                                                {paying ? "Processing…" : "Pay Now"}
                                            </button>
                                            <p className="secure">
                                                <Lock size={14} /> Secure payment. Your details are protected.
                                            </p>
                                        </>
                                    )}
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </main>

            {/* IMAGE PREVIEW */}
            {preview && (
                <div className="lightbox" onClick={() => setPreview(null)}>
                    <div className="lightbox-box" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="lightbox-close"
                            onClick={() => setPreview(null)}
                            aria-label="Close preview"
                        >
                            <X size={18} />
                        </button>
                        <div className="lightbox-img" style={bg(preview.img)} />
                        <p className="lightbox-cap">
                            {preview.label} · {challan.date}, {challan.time} · {challan.location}
                        </p>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}

export default ChallanDetailsPage;