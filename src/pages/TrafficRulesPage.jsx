import { useState } from "react";
import { Link } from "react-router-dom";
import {
    ChevronRight,
    ArrowRight,
    Gauge,
    TrafficCone,
    HardHat,
    Smartphone,
    FileText,
    ParkingCircle,
    Wine,
    ShieldCheck,
    Eye,
    Car,
} from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const categories = ["All", "Speed", "Signals", "Safety", "Documents", "Parking"];

const rules = [
    { cat: "Speed", icon: Gauge, color: "pink", title: "Over-speeding", text: "Stay within the posted speed limit. Limits are lower near schools, hospitals and busy junctions.", fine: "₹1,000 – ₹2,000" },
    { cat: "Signals", icon: TrafficCone, color: "pink", title: "Red Light Violation", text: "Always stop at a red signal and behind the stop line until the light turns green.", fine: "₹1,000 – ₹5,000" },
    { cat: "Safety", icon: HardHat, color: "orange", title: "No Helmet", text: "Riders and pillion riders must wear a proper, fastened helmet at all times.", fine: "₹1,000" },
    { cat: "Safety", icon: ShieldCheck, color: "green", title: "No Seat Belt", text: "The driver and all passengers must wear seat belts while the vehicle is moving.", fine: "₹1,000" },
    { cat: "Safety", icon: Smartphone, color: "purple", title: "Mobile Phone While Driving", text: "Do not hold or use a phone while driving. Pull over safely if you must take a call.", fine: "₹5,000" },
    { cat: "Safety", icon: Wine, color: "pink", title: "Drink and Drive", text: "Never drive after drinking. It is a serious offence and puts lives at risk.", fine: "₹10,000" },
    { cat: "Documents", icon: FileText, color: "blue", title: "Driving Without Licence", text: "Carry a valid driving licence whenever you drive. Keep a digital copy as a backup.", fine: "₹5,000" },
    { cat: "Documents", icon: FileText, color: "blue", title: "No Valid Insurance", text: "Every vehicle must have valid third-party insurance. Renew before it expires.", fine: "₹2,000" },
    { cat: "Parking", icon: ParkingCircle, color: "orange", title: "Wrong Parking", text: "Park only in marked areas. Do not block footpaths, junctions, gates or no-parking zones.", fine: "₹500 – ₹1,000" },
];

const tips = [
    { icon: Eye, color: "blue", title: "Stay Alert", text: "Keep your eyes on the road and your mind on driving." },
    { icon: Gauge, color: "pink", title: "Mind Your Speed", text: "Slow down in bad weather and crowded areas." },
    { icon: Car, color: "green", title: "Keep Your Distance", text: "Leave a safe gap so you have time to brake." },
    { icon: ShieldCheck, color: "orange", title: "Buckle Up", text: "Seat belts and helmets save lives every day." },
];

function TrafficRulesPage() {
    const [active, setActive] = useState("All");

    const shown = active === "All" ? rules : rules.filter((r) => r.cat === active);

    return (
        <>
            <Navbar />

            <main>
                {/* HERO */}
                <section className="page-hero">
                    <div className="container page-hero-inner">
                        <div className="page-hero-left">
                            <div className="breadcrumb">
                                <Link to="/">Home</Link>
                                <ChevronRight size={14} />
                                <span>Traffic Rules</span>
                            </div>

                            <h1 className="page-title">
                                Know the <span>Traffic Rules</span>
                            </h1>
                            <p className="page-desc">
                                Understand common traffic rules and the fines linked to them, so
                                you can drive safely and avoid a challan.
                            </p>

                            <div className="page-actions">
                                <Link to="/" className="btn btn-primary btn-lg">
                                    Check Your Challan
                                </Link>
                                <Link to="/how-it-works" className="btn btn-outline btn-lg">
                                    How It Works
                                </Link>
                            </div>
                        </div>

                        <div className="tracker-card">
                            <h3>Quick Facts</h3>
                            <p>Why the rules matter</p>
                            <div className="panel-row"><span>Rules covered</span><strong>{rules.length}</strong></div>
                            <div className="panel-row"><span>Categories</span><strong>{categories.length - 1}</strong></div>
                            <div className="panel-row"><span>Monitored by</span><strong>AI cameras</strong></div>
                            <div className="panel-row"><span>Evidence</span><strong>Photo / Video</strong></div>
                        </div>
                    </div>
                </section>

                {/* RULES */}
                <section className="section timeline-section">
                    <div className="container">
                        <h2 className="section-title">Common Traffic Violations</h2>
                        <p className="section-subtitle">
                            Pick a category to see the rules and the usual fines
                        </p>

                        <div className="filter-tabs">
                            {categories.map((c) => (
                                <button
                                    key={c}
                                    className={`filter-tab ${active === c ? "active" : ""}`}
                                    onClick={() => setActive(c)}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>

                        <div className="rules-grid">
                            {shown.map((rule) => {
                                const Icon = rule.icon;
                                return (
                                    <div className="rule-card" key={rule.title}>
                                        <div className="rule-top">
                      <span className={`icon-circle ${rule.color}`}>
                        <Icon size={22} />
                      </span>
                                            <span className="rule-cat">{rule.cat}</span>
                                        </div>
                                        <h3>{rule.title}</h3>
                                        <p>{rule.text}</p>
                                        <div className="fine-row">
                                            <span>Indicative fine</span>
                                            <strong>{rule.fine}</strong>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <p className="rules-note">
                            Fine amounts are indicative and can differ by state, vehicle type and
                            repeat offences. Always check the amount on your actual challan.
                        </p>
                    </div>
                </section>

                {/* TIPS */}
                <section className="section details-section">
                    <div className="container">
                        <h2 className="section-title">Safe Driving Tips</h2>
                        <p className="section-subtitle">Small habits that keep you and others safe</p>

                        <div className="details-grid four">
                            {tips.map((tip) => {
                                const Icon = tip.icon;
                                return (
                                    <div className="detail-card" key={tip.title}>
                    <span className={`icon-circle small ${tip.color}`}>
                      <Icon size={18} />
                    </span>
                                        <div>
                                            <h4>{tip.title}</h4>
                                            <p>{tip.text}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="cta-section">
                    <div className="container">
                        <div className="cta-banner">
                            <div>
                                <h2>Already received a challan?</h2>
                                <p>Enter your vehicle number and view the details in seconds.</p>
                            </div>
                            <Link to="/" className="btn btn-white btn-lg">
                                Check Now
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default TrafficRulesPage;