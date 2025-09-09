// src/data/navItems.js
const navItems = {
    logo: "/assets/logo.svg",
    contact: {
        phone: "+91 8169-3018-63",
        email: "enquiry@hightechcabins.in",
    },
    menu: [
        { label: "Home", path: "/" },
        {
            label: "Products",
            dropdown: [
                { label: "Portable Cabins", path: "/product/1" },
                { label: "Office Containers", path: "/product/2" },
                { label: "Bunkhouse", path: "/product/3" },
                { label: "Security Cabins", path: "/product/4" },
                { label: "Toll Cabin", path: "/product/5" },
            ],
        },
        { label: "Services", path: "/services" },
        { label: "Contact Us", path: "/contact" },
    ],
    buttons: [
        {
            text: "Whatsapp",
            bgColor: "glowingGreen",
            textColor: "black",
            border: "border-[1px] border-black",
            icon: true,
            iconPath: "/assets/icons/whatsapp.svg",
        },
        {
            text: "Download Brochure",
            bgColor: "white",
            textColor: "black",
            border: "border-[1px] border-black",
        },
        {
            text: "Request a quote",
            bgColor: "darkblue",
            textColor: "white",
            border: "none",
        },
    ],
};

export default navItems;
