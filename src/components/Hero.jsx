import { useState } from "react";
import { Search, Car, FileText, CreditCard, Bell } from "lucide-react";

const quickFeatures = [
    { icon: FileText, color: "purple", title: "View Challans", text: "Check your traffic violations" },
    { icon: CreditCard, color: "green", title: "Pay Online", text: "Quick and secure payments" },
    { icon: Bell, color: "blue", title: "Stay Notified", text: "Get real-time updates" },
];

function Hero() {
    const [activeTab, setActiveTab] = useState("vehicle");

    return (
        <section className="hero" id="home">
            {/* RIGHT: image */}
            <div className="hero-image">
                <img src="/images/hero-traffic.jpg" alt="AI traffic monitoring" />
            </div>

            {/* LEFT: text, pinned to the far left */}
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

            {/* CHECK YOUR CHALLAN CARD */}
            <div className="search-card">
                <h2>Check Your Challan</h2>
                <p className="search-sub">
                    Enter your vehicle number or challan number to view details
                </p>

                <div className="search-tabs">
                    <button
                        className={`tab ${activeTab === "vehicle" ? "active" : ""}`}
                        onClick={() => setActiveTab("vehicle")}
                    >
                        <Car size={16} />
                        Vehicle Number
                    </button>
                    <button
                        className={`tab ${activeTab === "challan" ? "active" : ""}`}
                        onClick={() => setActiveTab("challan")}
                    >
                        <FileText size={16} />
                        Challan Number
                    </button>
                </div>

                <div className="search-box">
          <span className="search-box-icon">
            {activeTab === "vehicle" ? <Car size={20} /> : <FileText size={20} />}
          </span>
                    <input
                        type="text"
                        placeholder={
                            activeTab === "vehicle" ? "e.g. WB 23 AB 1234" : "Enter challan number"
                        }
                    />
                    <button className="btn btn-primary search-btn">
                        <Search size={16} />
                        Search
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;