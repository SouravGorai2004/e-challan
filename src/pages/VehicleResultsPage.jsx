import { Link, useParams } from "react-router-dom";
import { ChevronRight, Hash, Calendar, MapPin, Search } from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {
    getVehicle,
    getChallansByVehicle,
    total,
    rupee,
} from "../data/challans.js";

function VehicleResultsPage() {
    const { number } = useParams();
    const vehicle = getVehicle(number);
    const list = getChallansByVehicle(number);

    const display = vehicle ? vehicle.number : number.toUpperCase();
    const unpaid = list.filter((c) => c.status === "unpaid").length;
    const paid = list.length - unpaid;

    return (
        <>
            <Navbar />

            <main>
                <section className="page-hero compact">
                    <div className="container">
                        <div className="breadcrumb">
                            <Link to="/">Home</Link>
                            <ChevronRight size={14} />
                            <Link to="/#check-challan">Check Challan</Link>
                            <ChevronRight size={14} />
                            <span>Vehicle Challans</span>
                        </div>

                        <h1 className="page-title small">Check Your Vehicle Challans</h1>
                        <div className="hero-vehicle">
                            <span className="plate-chip">{display}</span>
                            <Link to="/#check-challan" className="text-link">
                                <Search size={14} /> Search another
                            </Link>
                        </div>

                        <div className="stats">
                            <div className="stat-card">
                                <span>Total Challans</span>
                                <strong>{list.length}</strong>
                            </div>
                            <div className="stat-card">
                                <span>Unpaid</span>
                                <strong className="red">{unpaid}</strong>
                            </div>
                            <div className="stat-card">
                                <span>Paid</span>
                                <strong className="green">{paid}</strong>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="results-section">
                    <div className="container">
                        {list.length === 0 ? (
                            <div className="empty-state">
                                <h2>No challans found</h2>
                                <p>We could not find any challans for {display}.</p>
                                <p className="hint">
                                    Demo vehicles: WB 23 AB 1234 · MH 12 XY 9876
                                </p>
                                <Link to="/#check-challan" className="btn btn-primary btn-lg">
                                    Try another number
                                </Link>
                            </div>
                        ) : (
                            <div className="challan-list">
                                {list.map((c) => (
                                    <article className="challan-card" key={c.id}>
                                        <div className="cc-main">
                      <span className={`badge ${c.status}`}>
                        {c.status === "paid" ? "Paid" : "Unpaid"}
                      </span>
                                            <h3>{c.violation}</h3>
                                            <p>{c.shortDesc}</p>
                                        </div>

                                        <ul className="cc-meta">
                                            <li>
                                                <Hash size={15} />
                                                <span>Challan No.</span>
                                                <strong>{c.id}</strong>
                                            </li>
                                            <li>
                                                <Calendar size={15} />
                                                <span>Date & time</span>
                                                <strong>
                                                    {c.date}, {c.time}
                                                </strong>
                                            </li>
                                            <li>
                                                <MapPin size={15} />
                                                <span>Location</span>
                                                <strong>{c.location}</strong>
                                            </li>
                                        </ul>

                                        <div className="cc-side">
                                            <span className="cc-fine-label">Fine amount</span>
                                            <strong className="cc-fine">{rupee(total(c))}</strong>
                                            <div className="cc-actions">
                                                <Link to={`/challan/${c.id}`} className="btn btn-outline">
                                                    View Details
                                                </Link>
                                                {c.status === "unpaid" && (
                                                    <Link
                                                        to={`/challan/${c.id}?pay=1`}
                                                        className="btn btn-primary"
                                                    >
                                                        Pay Challan
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default VehicleResultsPage;