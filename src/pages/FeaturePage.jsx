import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { featurePages } from "../data/featurePages.js";

function FeaturePage({ page }) {
    const Icon = page.icon;
    const others = featurePages.filter((p) => p.slug !== page.slug);

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
                                <span>{page.cardTitle}</span>
                            </div>

                            <span className={`icon-circle ${page.color} page-icon`}>
                <Icon size={26} />
              </span>

                            <h1 className="page-title">
                                {page.title} <span>{page.highlight}</span>
                            </h1>
                            <p className="page-desc">{page.desc}</p>

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
                            <h3>{page.panelTitle}</h3>
                            <p>{page.panelSub}</p>
                            {page.rows.map(([label, value]) => (
                                <div className="panel-row" key={label}>
                                    <span>{label}</span>
                                    <strong>{value}</strong>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3 STEPS */}
                <section className="section timeline-section">
                    <div className="container">
                        <h2 className="section-title">How It Works</h2>
                        <p className="section-subtitle">Three quick steps</p>

                        <div className="mini-steps">
                            {page.steps.map((step, i) => (
                                <div className="mini-step" key={step.title}>
                                    <span className={`mini-num ${page.color}`}>{i + 1}</span>
                                    <h3>{step.title}</h3>
                                    <p>{step.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FEATURES */}
                <section className="section details-section">
                    <div className="container">
                        <h2 className="section-title">{page.featuresTitle}</h2>
                        <p className="section-subtitle">Everything included, nothing hidden</p>

                        <div className="details-grid">
                            {page.features.map((item) => {
                                const FIcon = item.icon;
                                return (
                                    <div className="detail-card" key={item.title}>
                    <span className={`icon-circle small ${item.color}`}>
                      <FIcon size={18} />
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

                {/* EXPLORE MORE */}
                <section className="section faq-section">
                    <div className="container">
                        <h2 className="section-title">Explore More</h2>
                        <p className="section-subtitle">Other things you can do with eChallan</p>

                        <div className="feature-grid three">
                            {others.map((p) => {
                                const OIcon = p.icon;
                                return (
                                    <Link to={`/${p.slug}`} className="feature-card" key={p.slug}>
                    <span className={`icon-circle ${p.color}`}>
                      <OIcon size={22} />
                    </span>
                                        <div>
                                            <h3>{p.cardTitle}</h3>
                                            <p>{p.cardText}</p>
                                            <span className="card-link">
                        Learn more <ArrowRight size={14} />
                      </span>
                                        </div>
                                    </Link>
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
                                <h2>{page.ctaTitle}</h2>
                                <p>{page.ctaText}</p>
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

export default FeaturePage;