// src/data/footerItems.js
const footerItems = {
    logo: "/assets/icons/footer-logo.svg",
    about: {
        title: "About",
        description:
            "Caballero’s Electric | 10+ Years Serving Nevada Licensed & Insured | Financing Available",
    },
    contacts: {
        title: "Contacts",
        phone: "+91 8169-3018-63",
        email: "enquiry@hightechcabins.in",
        address:
            "Shop No. 03, Dhansar Village, Near Ruby Steel, Opposite Universal Traders",
    },
    links: {
        title: "Main Links",
        items: [
            { label: "Home", path: "/" },
            { label: "Products", path: "/products" },
            { label: "Services", path: "/services" },
            { label: "Contact", path: "/contact" },
        ],
    },
    social: {
        title: "Social",
        icons: [
            { name: "facebook", path: "/assets/icons/facebook.svg", url: "#" },
            { name: "instagram", path: "/assets/icons/instagram.svg", url: "#" },
            { name: "twitter", path: "/assets/icons/twitter.svg", url: "#" },
            { name: "linkedin", path: "/assets/icons/linkedin.svg", url: "#" },
        ],
    },
    bottomLinks: {
        copyright: "© 2025 Hightech Cabins & Containers. All Rights Reserved.",
        terms: { label: "Terms and Conditions", path: "/terms" },
        privacy: { label: "Privacy Policy / SMS Campaign", path: "/privacy" },
    },
};

export default footerItems;
