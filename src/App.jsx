import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import HowItWorksPage from "./pages/HowItWorksPage.jsx";
import TrafficRulesPage from "./pages/TrafficRulesPage.jsx";
import VehicleResultsPage from "./pages/VehicleResultsPage.jsx";
import ChallanDetailsPage from "./pages/ChallanDetailsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/how-it-works" element={<HowItWorksPage />} />
                <Route path="/traffic-rules" element={<TrafficRulesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/vehicle/:number" element={<VehicleResultsPage />} />
                <Route path="/challan/:id" element={<ChallanDetailsPage />} />
            </Routes>
        </>
    );
}

export default App;