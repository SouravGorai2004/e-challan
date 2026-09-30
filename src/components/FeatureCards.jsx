import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { featurePages } from "../data/featurePages.js";

function FeatureCards() {
    return (
        <section className="section features-section">
            <div className="container">
                <h2 className="section-title">Why Use eChallan?</h2>
                <p className="section-subtitle">
                    A simple and transparent way to manage your traffic challans
                </p>

                <div className="feature-grid">
                    {featurePages.map((page) => {
                        const Icon = page.icon;
                        return (
                            <Link to={`/${page.slug}`} className="feature-card" key={page.slug}>
                <span className={`icon-circle ${page.color}`}>
                  <Icon size={22} />
                </span>
                                <div>
                                    <h3>{page.cardTitle}</h3>
                                    <p>{page.cardText}</p>
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
    );
}

export default FeatureCards;