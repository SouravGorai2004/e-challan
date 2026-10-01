import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const facts = [
    { value: "24/7", label: "Road monitoring" },
    { value: "Photo + Video", label: "Evidence on every challan" },
    { value: "Clear", label: "Fine breakdown, no hidden charges" },
    { value: "Online", label: "Review and pay from anywhere" },
];

const roadmap = [
    { title: "Detect", text: "AI-enabled cameras spot violations on the road." },
    { title: "Capture", text: "Photo or video evidence and the number plate are recorded." },
    { title: "Verify", text: "Details are matched with the registered vehicle." },
    { title: "Issue", text: "An e-challan is created with a clear fine breakdown." },
    { title: "Review", text: "The driver checks the violation and evidence online." },
    { title: "Resolve", text: "The fine is paid securely and a receipt is issued." },
];

const principles = [
    { title: "Transparency", text: "Every challan shows the violation, location and evidence clearly." },
    { title: "Simplicity", text: "No queues or paperwork. Find and pay a challan in minutes." },
    { title: "Fairness", text: "Every decision is backed by recorded evidence you can review yourself." },
    { title: "Reliability", text: "Consistent, technology-assisted detection and secure payments." },
];

function AboutPage() {
    return (
        <>
            <Navbar />

            <main>
                {/* HERO */}
                <section className="ab-hero">
                    <div className="container">
                        <div className="breadcrumb">
                            <Link to="/">Home</Link>
                            <ChevronRight size={14} />
                            <span>About</span>
                        </div>

                        <h1 className="page-title">
                            About <span>eChallan</span>
                        </h1>
                        <p className="page-desc">
                            eChallan is an AI-powered traffic violation platform that makes
                            challan management simple, fair and transparent, for safer roads
                            and a more trusted traffic system.
                        </p>

                        <div className="page-actions">
                            <Link to="/#check-challan" className="btn btn-primary btn-lg">
                                Check Your Challan
                            </Link>
                            <Link to="/contact" className="btn btn-outline btn-lg">
                                Contact Us
                            </Link>
                        </div>

                        <div className="ab-facts">
                            {facts.map((f) => (
                                <div className="ab-fact" key={f.label}>
                                    <strong>{f.value}</strong>
                                    <span>{f.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* MISSION + VISION */}
                <section className="ab-section">
                    <div className="container">
                        <div className="ab-purpose">
                            <div>
                                <span className="ab-eyebrow">Our Mission</span>
                                <h2>Fewer violations, fairer outcomes</h2>
                                <p>
                                    To reduce traffic violations with technology that is accurate
                                    and accountable, and to give every driver a simple way to view
                                    and settle their challans.
                                </p>
                            </div>
                            <div>
                                <span className="ab-eyebrow">Our Vision</span>
                                <h2>Roads and a system people trust</h2>
                                <p>
                                    Safer roads and a traffic system where every challan is clear,
                                    verifiable and easy to resolve online.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ROADMAP */}
                <section className="ab-section">
                    <div className="container">
                        <h2 className="section-title">From the Road to Resolution</h2>
                        <p className="section-subtitle">
                            How every challan travels through eChallan
                        </p>

                        <div className="ab-road">
                            {roadmap.map((step, i) => (
                                <div className={`ab-step s${i + 1}`} key={step.title}>
                                    <span className="ab-dot" />
                                    <span className="ab-num">0{i + 1}</span>
                                    <h3>{step.title}</h3>
                                    <p>{step.text}</p>
                                </div>
                            ))}
                            <span className="ab-turn" />
                        </div>
                    </div>
                </section>

                {/* PRINCIPLES */}
                <section className="ab-section">
                    <div className="container">
                        <h2 className="section-title">What We Stand For</h2>
                        <p className="section-subtitle">
                            The principles behind everything we build
                        </p>

                        <div className="ab-list">
                            {principles.map((p, i) => (
                                <div className="ab-row" key={p.title}>
                                    <span className="ab-row-num">0{i + 1}</span>
                                    <h3>{p.title}</h3>
                                    <p>{p.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CLOSING */}
                <section className="ab-closing">
                    <div className="container">
                        <h2>Have a question about eChallan?</h2>
                        <p>Our support team is happy to help.</p>
                        <Link to="/contact" className="btn btn-primary btn-lg">
                            Contact Us
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default AboutPage;