// Sample data. Replace with your real API later.
const IMG = "/images/hero-traffic.jpg";
const photo = (pos, size = "cover") => ({ src: IMG, pos, size });

const evidence = {
    main: photo("70% 55%"),
    support: [photo("55% 45%", "150%"), photo("85% 65%", "190%")],
    plate: photo("76% 72%", "340%"),
};

export const vehicles = {
    WB23AB1234: {
        number: "WB 23 AB 1234",
        make: "Honda City (2021)",
        type: "Four-wheeler · Sedan",
        colour: "Silver",
        owner: "Rahul S.",
        ownerCity: "Kolkata, West Bengal",
        image: photo("72% 60%", "170%"),
    },
    MH12XY9876: {
        number: "MH 12 XY 9876",
        make: "Hyundai Creta (2022)",
        type: "Four-wheeler · SUV",
        colour: "White",
        owner: "Anita K.",
        ownerCity: "Mumbai, Maharashtra",
        image: photo("68% 58%", "180%"),
    },
};

export const challans = [
    {
        id: "EC-2026-0001",
        vehicle: "WB23AB1234",
        status: "unpaid",
        violation: "Over-speeding",
        shortDesc: "Vehicle recorded above the permitted speed limit.",
        explanation:
            "The vehicle was recorded by an AI speed camera travelling faster than the permitted limit for this road section.",
        rule: "Section 112 / 183, Motor Vehicles Act, 1988",
        date: "12 Sep 2026",
        time: "10:42 AM",
        location: "Kona Expressway, Howrah",
        address: "Kona Expressway, Howrah, West Bengal",
        authority: "Kolkata Traffic Police",
        detectedSpeed: 78,
        permittedSpeed: 50,
        baseFine: 1000,
        charges: 50,
        evidence,
    },
    {
        id: "EC-2026-0002",
        vehicle: "WB23AB1234",
        status: "unpaid",
        violation: "Red Light Violation",
        shortDesc: "Vehicle crossed the stop line while the signal was red.",
        explanation:
            "The vehicle crossed the stop line after the signal had turned red, as captured by the junction camera.",
        rule: "Section 119 / 177, Motor Vehicles Act, 1988",
        date: "28 Aug 2026",
        time: "06:15 PM",
        location: "Park Street Crossing, Kolkata",
        address: "Park Street Crossing, Kolkata, West Bengal 700016",
        authority: "Kolkata Traffic Police",
        detectedSpeed: null,
        permittedSpeed: null,
        baseFine: 1000,
        charges: 50,
        evidence,
    },
    {
        id: "EC-2026-0003",
        vehicle: "WB23AB1234",
        status: "paid",
        violation: "No Seat Belt",
        shortDesc: "Driver was not wearing a seat belt.",
        explanation:
            "The camera captured the driver without a fastened seat belt while the vehicle was moving.",
        rule: "Section 125 / 194B, Motor Vehicles Act, 1988",
        date: "03 Aug 2026",
        time: "09:20 AM",
        location: "Sector V, Salt Lake",
        address: "Sector V, Salt Lake, Kolkata, West Bengal 700091",
        authority: "Bidhannagar Traffic Police",
        detectedSpeed: null,
        permittedSpeed: null,
        baseFine: 1000,
        charges: 50,
        paidOn: "10 Aug 2026",
        evidence,
    },
    {
        id: "EC-2026-0004",
        vehicle: "WB23AB1234",
        status: "paid",
        violation: "Wrong Parking",
        shortDesc: "Vehicle parked in a no-parking zone.",
        explanation:
            "The vehicle was parked in a marked no-parking area and obstructed the road.",
        rule: "Section 122 / 177, Motor Vehicles Act, 1988",
        date: "15 Jul 2026",
        time: "01:05 PM",
        location: "Camac Street, Kolkata",
        address: "Camac Street, Kolkata, West Bengal 700017",
        authority: "Kolkata Traffic Police",
        detectedSpeed: null,
        permittedSpeed: null,
        baseFine: 500,
        charges: 50,
        paidOn: "18 Jul 2026",
        evidence,
    },
    {
        id: "EC-2026-0005",
        vehicle: "MH12XY9876",
        status: "unpaid",
        violation: "Over-speeding",
        shortDesc: "Vehicle recorded above the permitted speed limit.",
        explanation:
            "The vehicle was recorded by an AI speed camera travelling faster than the permitted limit.",
        rule: "Section 112 / 183, Motor Vehicles Act, 1988",
        date: "20 Sep 2026",
        time: "08:35 AM",
        location: "Bandra-Worli Sea Link approach",
        address: "Bandra-Worli Sea Link, Mumbai, Maharashtra",
        authority: "Mumbai Traffic Police",
        detectedSpeed: 92,
        permittedSpeed: 80,
        baseFine: 1000,
        charges: 50,
        evidence,
    },
    {
        id: "EC-2026-0006",
        vehicle: "MH12XY9876",
        status: "paid",
        violation: "Red Light Violation",
        shortDesc: "Vehicle crossed the stop line while the signal was red.",
        explanation:
            "The vehicle crossed the stop line after the signal had turned red.",
        rule: "Section 119 / 177, Motor Vehicles Act, 1988",
        date: "02 Sep 2026",
        time: "07:50 PM",
        location: "Linking Road, Bandra West",
        address: "Linking Road, Bandra West, Mumbai, Maharashtra",
        authority: "Mumbai Traffic Police",
        detectedSpeed: null,
        permittedSpeed: null,
        baseFine: 1000,
        charges: 50,
        paidOn: "05 Sep 2026",
        evidence,
    },
];

/* ---------- helpers ---------- */
export const normalize = (s) => String(s).replace(/[^a-z0-9]/gi, "").toUpperCase();
export const total = (c) => c.baseFine + c.charges;
export const rupee = (n) => "₹" + n.toLocaleString("en-IN");

const KEY = "echallan-paid";

function readPaid() {
    try {
        return JSON.parse(localStorage.getItem(KEY) || "{}");
    } catch {
        return {};
    }
}

// Demo payment: remembers the paid challan in the browser.
// Replace with your real payment gateway / API call.
export function markPaid(id) {
    const map = readPaid();
    map[id] = new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
    try {
        localStorage.setItem(KEY, JSON.stringify(map));
    } catch {
        /* ignore */
    }
}

function applyPayment(c) {
    const paidOn = readPaid()[c.id];
    return paidOn ? { ...c, status: "paid", paidOn } : c;
}

export const getVehicle = (n) => vehicles[normalize(n)] || null;

export const getChallansByVehicle = (n) =>
    challans.filter((c) => c.vehicle === normalize(n)).map(applyPayment);

export const getChallan = (id) => {
    const found = challans.find((c) => normalize(c.id) === normalize(id));
    return found ? applyPayment(found) : null;
};