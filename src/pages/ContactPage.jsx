import { useState } from "react";
import { Link } from "react-router-dom";
import {
    ChevronRight,
    ChevronDown,
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    CheckCircle2,
} from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

// PLACEHOLDER details. Replace with your real contact information.
const info = [
    { icon: Mail, color: "blue", title: "Email Us", lines: ["support@echallan.in"] },
    { icon: Phone, color: "green", title: "Call Us", lines: ["1800-000-0000 (toll free)"] },
    { icon: MapPin, color: "orange", title: "Visit Us", lines: ["eChallan Support Office", "Kolkata, West Bengal, India"] },
    { icon: Clock, color: "purple", title: "Working Hours", lines: ["Mon – Sat: 9:00 AM – 6:00 PM"] },
];

const subjects = [
    "General question",
    "Challan details",
    "Payment issue",
    "Dispute a challan",
    "Technical problem",
    "Other",
];

const faqs = [
    {
        q: "How do I find my challan?",
        a: "Use the Check Your Challan card on the home page. Enter your vehicle number to see all challans, or a challan number to open one directly.",
    },
    {
        q: "I paid but it still shows unpaid. What should I do?",
        a: "Payments can take a little time to update. If it still shows unpaid after a while, contact us with your challan number and payment receipt.",
    },
    {
        q: "What if I think a challan is wrong?",
        a: "Review the evidence on the challan details page first. If you still disagree, send us a message with the challan number and your reason.",
    },
];

const empty = { name: "", email: "", phone: "", subject: subjects[0], message: "" };

function ContactPage() {
    const [form, setForm] = useState(empty);
    const [errors, setErrors] = useState({});
    const [sent, setSent] = useState(false);
    const [openFaq, setOpenFaq] = useState(0);

    const update = (field) => (e) => {
        setForm({ ...form, [field]: e.target.value });
        setErrors({ ...errors, [field]: "" });
    };

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = "Please enter your name";
        if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Please enter a valid email";
        if (form.message.trim().length < 10) e.message = "Please write at least 10 characters";
        return e;
    };

    // Demo submit. Replace with a call to your backend / email service.
    const submit = (e) => {
        e.preventDefault();
        const found = validate();
        setErrors(found);
        if (Object.keys(found).length === 0) setSent(true);
    };

    const reset = () => {
        setForm(empty);
        setErrors({});
        setSent(false);
    };

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
                            <span>Contact</span>
                        </div>
                        <h1 className="page-title small">
                            Get in <span>Touch</span>
                        </h1>
                        <p className="page-desc tight">
                            Questions about a challan, a payment or the platform? Send us a
                            message and we will get back to you.
                        </p>
                    </div>
                </section>

                {/* FORM + INFO */}
                <section className="results-section">
                    <div className="container">
                        <div className="contact-layout">
                            {/* FORM */}
                            <div className="panel contact-form-card">
                                {sent ? (
                                    <div className="success-box">
                    <span className="icon-circle green big">
                      <CheckCircle2 size={30} />
                    </span>
                                        <h3>Message sent</h3>
                                        <p>
                                            Thank you, {form.name.split(" ")[0]}. We have received your
                                            message and will reply to {form.email} soon.
                                        </p>
                                        <button className="btn btn-outline btn-lg" onClick={reset}>
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={submit} noValidate>
                                        <h3>Send us a message</h3>
                                        <p className="form-sub">Fields marked * are required.</p>

                                        <div className="form-grid">
                                            <div className="field">
                                                <label htmlFor="name">Full name *</label>
                                                <input
                                                    id="name"
                                                    type="text"
                                                    placeholder="Your name"
                                                    value={form.name}
                                                    onChange={update("name")}
                                                    className={errors.name ? "invalid" : ""}
                                                />
                                                {errors.name && <span className="field-error">{errors.name}</span>}
                                            </div>

                                            <div className="field">
                                                <label htmlFor="email">Email *</label>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    placeholder="you@example.com"
                                                    value={form.email}
                                                    onChange={update("email")}
                                                    className={errors.email ? "invalid" : ""}
                                                />
                                                {errors.email && <span className="field-error">{errors.email}</span>}
                                            </div>

                                            <div className="field">
                                                <label htmlFor="phone">Phone (optional)</label>
                                                <input
                                                    id="phone"
                                                    type="tel"
                                                    placeholder="+91 00000 00000"
                                                    value={form.phone}
                                                    onChange={update("phone")}
                                                />
                                            </div>

                                            <div className="field">
                                                <label htmlFor="subject">Subject</label>
                                                <select id="subject" value={form.subject} onChange={update("subject")}>
                                                    {subjects.map((s) => (
                                                        <option key={s}>{s}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="field full">
                                                <label htmlFor="message">Message *</label>
                                                <textarea
                                                    id="message"
                                                    rows="5"
                                                    placeholder="Tell us how we can help. Include your challan number if you have one."
                                                    value={form.message}
                                                    onChange={update("message")}
                                                    className={errors.message ? "invalid" : ""}
                                                />
                                                {errors.message && <span className="field-error">{errors.message}</span>}
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-primary btn-lg">
                                            <Send size={16} />
                                            Send Message
                                        </button>
                                    </form>
                                )}
                            </div>

                            {/* INFO */}
                            <aside className="contact-side">
                                {info.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <div className="detail-card" key={item.title}>
                      <span className={`icon-circle small ${item.color}`}>
                        <Icon size={18} />
                      </span>
                                            <div>
                                                <h4>{item.title}</h4>
                                                {item.lines.map((l) => (
                                                    <p key={l}>{l}</p>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </aside>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="section faq-section">
                    <div className="container">
                        <h2 className="section-title">Quick Answers</h2>
                        <p className="section-subtitle">You may find your answer here first</p>

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
            </main>

            <Footer />
        </>
    );
}

export default ContactPage;