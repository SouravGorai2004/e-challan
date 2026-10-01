import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
    { label: "Home", to: "/" },
    { label: "Check Challan", to: "/#check-challan", plain: true },
    { label: "How It Works", to: "/how-it-works" },
    { label: "Traffic Rules", to: "/traffic-rules" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
];

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="navbar">
            <div className="container navbar-inner">
                <Link to="/" className="brand">
                    <img src="/images/logo.png" alt="eChallan logo" className="brand-logo" />
                    <div className="brand-text">
                        <span className="brand-name">eChallan</span>
                        <span className="brand-tagline">Safer Roads, Safer Tomorrow</span>
                    </div>
                </Link>

                <nav className={`nav-links ${open ? "nav-open" : ""}`}>
                    {links.map((link) =>
                        link.plain ? (
                            <Link
                                key={link.label}
                                to={link.to}
                                className="nav-link"
                                onClick={() => setOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ) : (
                            <NavLink
                                key={link.label}
                                to={link.to}
                                end
                                onClick={() => setOpen(false)}
                                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                            >
                                {link.label}
                            </NavLink>
                        )
                    )}
                </nav>

                <div className="nav-actions">
                    <button
                        className="menu-toggle"
                        aria-label="Toggle menu"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;