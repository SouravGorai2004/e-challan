import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const links = [
    { label: "Home", to: "/" },
    { label: "Check Challan", to: "/#check-challan" },
    { label: "How It Works", to: "/how-it-works" },
    { label: "Traffic Rules", to: "/traffic-rules" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
];

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <Link to="/" className="brand">
                        <img src="/images/logo.png" alt="eChallan logo" className="brand-logo" />
                        <div className="brand-text">
                            <span className="brand-name">eChallan</span>
                            <span className="brand-tagline">Safer Roads, Safer Tomorrow</span>
                        </div>
                    </Link>

                    <nav className="footer-links">
                        {links.map((link) => (
                            <Link key={link.label} to={link.to}>
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="socials">
                        <a href="#" aria-label="Facebook"><Facebook size={16} /></a>
                        <a href="#" aria-label="X"><Twitter size={16} /></a>
                        <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
                        <a href="#" aria-label="YouTube"><Youtube size={16} /></a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>© 2026 eChallan. All rights reserved.</span>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms &amp; Conditions</a>
                        <Link to="/contact">Help &amp; Support</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;