import { FileText, CreditCard, BarChart3, ArrowRight } from "lucide-react";

const cards = [
    {
        mode: "challan",
        icon: FileText,
        color: "blue",
        title: "View Violation Details",
        text: "See violation type, date, location and evidence (image/video)",
    },
    {
        mode: "pay",
        icon: CreditCard,
        color: "green",
        title: "Pay Challan Online",
        text: "Quick, secure and hassle-free payments",
    },
    {
        mode: "history",
        icon: BarChart3,
        color: "orange",
        title: "Track History",
        text: "View your past violations and payment status",
    },
];

function FeatureCards({ onSelect }) {
    return (
        <section className="section features-section">
            <div className="container">
                <h2 className="section-title">Why Use eChallan?</h2>
                <p className="section-subtitle">
                    A simple and transparent way to manage your traffic challans
                </p>

                <div className="feature-grid three">
                    {cards.map((card) => {
                        const Icon = card.icon;
                        return (
                            <button
                                type="button"
                                className="feature-card clickable"
                                key={card.mode}
                                onClick={() => onSelect(card.mode)}
                            >
                <span className={`icon-circle ${card.color}`}>
                  <Icon size={22} />
                </span>
                                <div>
                                    <h3>{card.title}</h3>
                                    <p>{card.text}</p>
                                    <span className="card-link">
                    Get started <ArrowRight size={14} />
                  </span>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default FeatureCards;