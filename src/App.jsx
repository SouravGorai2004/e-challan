import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import HowItWorksPage from "./pages/HowItWorksPage.jsx";
import TrafficRulesPage from "./pages/TrafficRulesPage.jsx";
import FeaturePage from "./pages/FeaturePage.jsx";
import { featurePages } from "./data/featurePages.js";

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
                {featurePages.map((page) => (
                    <Route
                        key={page.slug}
                        path={`/${page.slug}`}
                        element={<FeaturePage page={page} />}
                    />
                ))}
            </Routes>
        </>
    );
}

export default App;