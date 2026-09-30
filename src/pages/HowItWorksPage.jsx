import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Camera,
    FileText,
    Bell,
    CreditCard,
    Check,
    ChevronDown,
    ChevronRight,
    AlertTriangle,
    Clock,
    MapPin,
    Image,
    IndianRupee,
    BadgeCheck,
    ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const steps = [
    {
        icon: Camera,
        color: "purple",
        number: 1,
        title: "Violation Detected",
        text: "AI-enabled traffic cameras monitor the road and automatically spot violations such as speeding, signal jumping and wrong-lane driving.",
        points: [
            "Works continuously, day and night",
            "Vehicle and number plate are captured",
            "Photo or video evidence is saved",
        ],
    },
    {
        icon: FileText,
        color: "blue",
        number: 2,
        title: "Challan Generated",
        text: "The system reads the number plate, matches it to the registered vehicle and creates an e-challan with all the details.",
        points: [
            "Violation type, date, time and location",
            "Evidence attached to the challan",
            "Fine amount and due date",
        ],
    },
    {
        icon: Bell,
        color: "green",
        number: 3,
        title: "Get Notified",
        text: "You are informed as soon as a challan is issued against your vehicle, so nothing goes unnoticed.",
        points: [
            "Instant alert for new challans",
            "Reminders before the due date",
            "Status updates after payment",
        ],
    },
    {
        icon: CreditCard,
        color: "orange",
        number: 4,
        title: "View & Pay",
        text: "Search with your vehicle or challan number, review the evidence and pay online in a few clicks.",
        points: [
            "Check full violation details",
            "Quick and secure online payment",
            "Download your payment receipt",
        ],
    },
];

const details = [
    { icon: AlertTriangle, color: "pink", title: "Violation Type", text: "What rule was broken, clearly described." },
    { icon: Clock, color: "blue", title: "Date & Time", text: "The exact moment the violation was recorded." },
    { icon: MapPin, color: "purple", title: "Location", text: "The road or junction where it took place." },
    { icon: Image, color: "orange", title: "Photo / Video Evidence", text: "Visual proof captured by the camera." },
    { icon: IndianRupee, color: "green", title: "Fine Amount", text: "The amount payable and the due date." },
    { icon: BadgeCheck, color: "blue", title: "Payment Status", text: "Whether the challan is pending or paid." },
];

const faqs = [
    {
        q: "How do I find out if I have a challan?",
        a: "Use the Check Your Challan box on the home page. Enter your vehicle number or challan number and all matching challans are shown.",
    },
    {
        q: "What details can I see for each challan?",
        a: "You can see the violation type, date, time, location, photo or video evidence, the fine amount and the current payment status.",
    },
    {
        q: "Will I be notified about a new challan?",
        a: "Yes. You receive an alert when a challan is generated, along with reminders as the due date gets closer.",
    },
    {
        q: "Can I pay the challan online?",
        a: "Yes. Open the challan, review the details and pay online. A receipt is available after a successful payment.",
    },
    {
        q: "What if I think a challan is wrong?",
        a: "Review the evidence attached to the challan first. If you still disagree, use the Help & Support link in the footer to get in touch.",
    },
];

function HowItWorksPage() {
    const [openFaq, setOpenFaq] = useState(0);

    return (
        <>
            <Navbar />

            <main>
                {/* ========== PAGE HERO ========== */}
                <section className="page-hero">
                    <div className="container page-hero-inner">
                        <div className="page-hero-left">
                            <div className="breadcrumb">
                                <Link to="/">Home</Link>
                                <ChevronRight size={14} />
                                <span>How It Works</span>
                            </div>

                            <h1 className="page-title">
                                How <span>eChallan</span> Works
                            </h1>
                            <p className="page-desc">
                                From detection to payment, everything happens in four simple
                                steps. No paperwork, no queues, complete transparency.
                            </p>

                            <div className="page-actions">
                                <Link to="/" className="btn btn-primary btn-lg">
                                    Check Your Challan
                                </Link>
                                <a href="#steps" className="btn btn-outline btn-lg">
                                    See the Steps
                                </a>
                            </div>
                        </div>

                        {/* Status tracker card */}
                        <div className="tracker-card">
                            <h3>Challan Journey</h3>
                            <p>Track every stage, end to end</p>
                            <ul>
                                {steps.map((s) => {
                                    const Icon = s.icon;
                                    return (
                                        <li key={s.title}>
                      <span className={`icon-circle small ${s.color}`}>
                        <Icon size={18} />
                      </span>
                                            <span className="tracker-name">{s.title}</span>
                                            <Check size={18} className="tracker-check" />
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ========== STEPS TIMELINE ========== */}
                <section className="section timeline-section" id="steps">
                    <div className="container">
                        <h2 className="section-title">Four Simple Steps</h2>
                        <p className="section-subtitle">
                            Here is exactly what happens after a violation is detected
                        </p>

                        <div className="timeline">
                            {steps.map((step, index) => {
                                const Icon = step.icon;
                                return (
                                    <div
                                        className={`tl-row ${index % 2 === 0 ? "left" : "right"}`}
                                        key={step.title}
                                    >
                                        <div className="tl-card">
                                            <div className="tl-head">
                        <span className={`icon-circle ${step.color}`}>
                          <Icon size={22} />
                        </span>
                                                <div>
                                                    <span className="tl-step">Step {step.number}</span>
                                                    <h3>{step.title}</h3>
                                                </div>
                                            </div>
                                            <p className="tl-text">{step.text}</p>
                                            <ul className="tl-points">
                                                {step.points.map((point) => (
                                                    <li key={point}>
                                                        <Check size={16} />
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <span className={`tl-dot ${step.color}`}>{step.number}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ========== WHAT YOUR CHALLAN INCLUDES ========== */}
                <section className="section details-section">
                    <div className="container">
                        <h2 className="section-title">What Your Challan Includes</h2>
                        <p className="section-subtitle">
                            Every e-challan comes with complete, verifiable information
                        </p>

                        <div className="details-grid">
                            {details.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div className="detail-card" key={item.title}>
                    <span className={`icon-circle small ${item.color}`}>
                      <Icon size={18} />
                    </span>
                                        <div>
                                            <h4>{item.title}</h4>
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ========== FAQ ========== */}
                <section className="section faq-section">
                    <div className="container">
                        <h2 className="section-title">Frequently Asked Questions</h2>
                        <p className="section-subtitle">
                            Quick answers to common questions about e-challans
                        </p>

                        <div className="faq-list">
                            {faqs.map((item, index) => {
                                const isOpen = openFaq === index;
                                return (
                                    <div className={`faq-item ${isOpen ? "open" : ""}`} key={item.q}>
                                        <button
                                            className="faq-question"
                                            onClick={() => setOpenFaq(isOpen ? -1 : index)}
                                        >
                                            {item.q}
                                            <ChevronDown size={20} />
                                        </button>
                                        {isOpen && <p className="faq-answer">{item.a}</p>}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ========== CTA BANNER ========== */}
                <section className="cta-section">
                    <div className="container">
                        <div className="cta-banner">
                            <div>
                                <h2>Ready to check your challan?</h2>
                                <p>Enter your vehicle number and view details in seconds.</p>
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

export default HowItWorksPage;