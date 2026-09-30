import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import FeatureCards from "../components/FeatureCards.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <FeatureCards />
                <HowItWorks />
            </main>
            <Footer />
        </>
    );
}

export default Home;