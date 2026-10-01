import { FileText, CreditCard } from "lucide-react";
import SearchCard from "./SearchCard.jsx";

const quickFeatures = [
    { icon: FileText, color: "purple", title: "View Challans", text: "Check your traffic violations" },
    { icon: CreditCard, color: "green", title: "Pay Online", text: "Quick and secure payments" },
];

function Hero({ mode, setMode }) {
    return (
        <section className="hero" id="home">
            <div className="hero-image">
                <img src="/images/hero-traffic.jpg" alt="AI traffic monitoring" />
            </div>

            <div className="container hero-inner hero-wide">
                <div className="hero-left">
                    <h1 className="hero-title">
                        Drive Safe,
                        <br />
                        <span>Pay Smart</span>
                    </h1>

                    <p className="hero-desc">
                        AI-powered traffic monitoring for safer roads.
                        <br />
                        View, pay and manage your e-challans easily.
                    </p>

                    <div className="quick-features">
                        {quickFeatures.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div className="quick-item" key={item.title}>
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
            </div>

            <SearchCard mode={mode} setMode={setMode} />
        </section>
    );
}

export default Hero;