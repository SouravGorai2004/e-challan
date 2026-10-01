import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import FeatureCards from "../components/FeatureCards.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Footer from "../components/Footer.jsx";

const scrollToCard = () =>
    document
        .getElementById("check-challan")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });

function Home() {
    const [mode, setMode] = useState("default");
    const { hash } = useLocation();

    // "Check Challan" links (navbar, breadcrumbs) use /#check-challan
    useEffect(() => {
        if (hash === "#check-challan") setTimeout(scrollToCard, 150);
    }, [hash]);

    const choose = (nextMode) => {
        setMode(nextMode);
        setTimeout(scrollToCard, 60);
    };

    return (
        <>
            <Navbar />
            <main>
                <Hero mode={mode} setMode={setMode} />
                <FeatureCards onSelect={choose} />
                <HowItWorks />
            </main>
            <Footer />
        </>
    );
}

export default Home;