import { Camera, FileText, Bell, CreditCard, ArrowRight } from "lucide-react";

const steps = [
    {
        icon: Camera,
        color: "purple",
        number: 1,
        title: "Violation Detected",
        text: "Traffic cameras capture violations using AI",
    },
    {
        icon: FileText,
        color: "blue",
        number: 2,
        title: "Challan Generated",
        text: "Your challan is created with details and evidence",
    },
    {
        icon: Bell,
        color: "green",
        number: 3,
        title: "Get Notified",
        text: "You receive a notification about the challan",
    },
    {
        icon: CreditCard,
        color: "orange",
        number: 4,
        title: "View & Pay",
        text: "Check details and pay online easily",
    },
];

function HowItWorks() {
    return (
        <section className="section how-section" id="how-it-works">
            <div className="container">
                <h2 className="section-title">How It Works?</h2>
                <p className="section-subtitle">
                    From detection to payment, in a few simple steps
                </p>

                <div className="steps">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div className="step-wrap" key={step.title}>
                                <div className="step">
                  <span className={`step-icon ${step.color}`}>
                    <Icon size={26} />
                  </span>
                                    <span className={`step-num ${step.color}`}>{step.number}</span>
                                    <h3>{step.title}</h3>
                                    <p>{step.text}</p>
                                </div>
                                {index < steps.length - 1 && (
                                    <ArrowRight className="step-arrow" size={22} />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;