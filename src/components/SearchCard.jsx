import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Car, FileText, ArrowLeft } from "lucide-react";
import { normalize } from "../data/challans.js";

const MODES = {
    default: {
        title: "Check Your Challan",
        sub: "Enter your vehicle number or challan number to view details",
        tabs: true,
    },
    challan: {
        title: "View Violation Details",
        sub: "Please enter the Challan Number",
        type: "challan",
    },
    pay: {
        title: "Pay Challan Online",
        sub: "Please enter the Challan Number",
        type: "challan",
        pay: true,
    },
    history: {
        title: "Track Vehicle History",
        sub: "Please enter your Vehicle Number",
        type: "vehicle",
    },
};

function SearchForm({ mode, onReset }) {
    const navigate = useNavigate();
    const config = MODES[mode];
    const [tab, setTab] = useState("vehicle");
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const type = config.tabs ? tab : config.type;

    let placeholder = "Enter Vehicle Number";
    if (type === "challan") placeholder = "Enter Challan Number";
    if (mode === "default" && type === "vehicle") placeholder = "e.g. WB 23 AB 1234";

    const submit = (e) => {
        e.preventDefault();
        const v = value.trim();
        if (!v) {
            setError(`Please enter the ${type === "vehicle" ? "vehicle" : "challan"} number`);
            return;
        }
        if (type === "vehicle") {
            navigate(`/vehicle/${normalize(v)}`);
        } else {
            navigate(`/challan/${normalize(v)}${config.pay ? "?pay=1" : ""}`);
        }
    };

    return (
        <form onSubmit={submit} noValidate>
            <h2>{config.title}</h2>
            <p className="search-sub">{config.sub}</p>

            {config.tabs && (
                <div className="search-tabs">
                    <button
                        type="button"
                        className={`tab ${tab === "vehicle" ? "active" : ""}`}
                        onClick={() => {
                            setTab("vehicle");
                            setError("");
                        }}
                    >
                        <Car size={16} />
                        Vehicle Number
                    </button>
                    <button
                        type="button"
                        className={`tab ${tab === "challan" ? "active" : ""}`}
                        onClick={() => {
                            setTab("challan");
                            setError("");
                        }}
                    >
                        <FileText size={16} />
                        Challan Number
                    </button>
                </div>
            )}

            <div className="search-box">
        <span className="search-box-icon">
          {type === "vehicle" ? <Car size={20} /> : <FileText size={20} />}
        </span>
                <input
                    type="text"
                    value={value}
                    placeholder={placeholder}
                    onChange={(e) => {
                        setValue(e.target.value);
                        setError("");
                    }}
                />
                <button type="submit" className="btn btn-primary search-btn">
                    <Search size={16} />
                    Search
                </button>
            </div>

            {error && <p className="field-error">{error}</p>}

            {mode !== "default" && (
                <button type="button" className="back-link" onClick={onReset}>
                    <ArrowLeft size={14} />
                    Search by vehicle or challan number
                </button>
            )}
        </form>
    );
}

function SearchCard({ mode, setMode }) {
    return (
        <div
            id="check-challan"
            className={`search-card ${mode !== "default" ? "focused" : ""}`}
        >
            {/* key makes the content remount, which plays the fade animation */}
            <div className="swap" key={mode}>
                <SearchForm mode={mode} onReset={() => setMode("default")} />
            </div>
        </div>
    );
}

export default SearchCard;