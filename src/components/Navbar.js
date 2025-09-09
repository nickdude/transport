import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import navData from "../data/navItems";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);


    return (
        <>
            {/* Top Bar */}
            <div className="w-full h-20 bg-white text-black px-4 flex justify-between items-center shadow-md">
                <Link to="/">
                    <img src={navData.logo} alt="logo" className="w-16" />
                </Link>

                {/* Contact Info (Desktop Only) */}
                <div className="hidden lg:flex items-center gap-8">
                    <ul className="flex flex-col font-inter text-sm font-medium text-blue">
                        <li className="hover:text-lightGrey cursor-pointer flex items-center gap-2">
                            <img src="/assets/icons/phone.svg" alt="phone-icon" className="w-4 h-4" />
                            {navData.contact.phone}
                        </li>
                        <li className="hover:text-lightGrey cursor-pointer flex items-center gap-2">
                            <img src="/assets/icons/email.svg" alt="email-icon" className="w-4 h-4" />
                            {navData.contact.email}
                        </li>
                    </ul>
                </div>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex items-center gap-3">
                    {navData.buttons.map((btn, i) => (
                        <Button key={i} {...btn} onClick={() => {
                            if (btn.text === "Download Brochure") {
                                const link = document.createElement("a");
                                link.href = "/sample.pdf"; // make sure sample.pdf is in public folder
                                link.download = "HightechCabins_Brochure.pdf";
                                link.click();
                            } else {
                                console.log(btn.text);
                            }
                        }} />
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <div className="lg:hidden flex items-center gap-4">
                    <img src="/assets/icons/phone.svg" alt="phone-icon" className="w-6 h-6" />
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                    </button>
                </div>
            </div>

            {/* Bottom Navigation (Desktop Only) */}
            <div className="hidden md:flex w-full h-14 bg-lightGrey justify-start items-center py-2 shadow-fancy border-darkGrey border-t border-b relative">
                <ul className="flex text-sm font-normal text-black gap-6 ml-20 leading-6">
                    {navData.menu.map((item, idx) =>
                        item.dropdown ? (
                            <div key={idx} className="relative">
                                <li
                                    className="cursor-pointer flex items-center gap-2"
                                    onClick={() =>
                                        setActiveDropdown(activeDropdown === idx ? null : idx)
                                    }
                                >
                                    {item.label} <FaChevronDown className="text-xs" />
                                </li>
                                {activeDropdown === idx && (
                                    <ul className="absolute top-8 left-0 bg-white shadow-lg rounded-md p-2 w-48 space-y-2 z-20">
                                        {item.dropdown.map((p, i) => (
                                            <li key={i}>
                                                <Link
                                                    to={p.path}
                                                    className="px-3 py-2 block hover:bg-gray-100 text-sm"
                                                    onClick={() => setActiveDropdown(null)} // close menu on click
                                                >
                                                    {p.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ) : (
                            <li key={idx} className="hover:text-darkblue cursor-pointer">
                                <Link to={item.path}>{item.label}</Link>
                            </li>
                        )
                    )}
                </ul>
            </div>

            {/* Mobile Dropdown Menu (you can leave it as is) */}
            {menuOpen && (
                <div className="lg:hidden bg-white w-full shadow-md p-4 space-y-4">
                    <ul className="flex flex-col text-sm font-medium text-black space-y-3">
                        {navData.menu.map((item, idx) =>
                            item.dropdown ? (
                                <div key={idx}>
                                    <li
                                        className="cursor-pointer flex items-center gap-2"
                                        onClick={() => setActiveDropdown(activeDropdown === idx ? null : idx)}
                                    >
                                        {item.label} <FaChevronDown className="text-xs" />
                                    </li>
                                    {activeDropdown === idx && (
                                        <ul className="ml-4 mt-2 space-y-2">
                                            {item.dropdown.map((p, i) => (
                                                <li key={i}>
                                                    <Link to={p.path} className="hover:text-darkblue text-sm">
                                                        {p.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ) : (
                                <li key={idx} className="hover:text-lightGrey cursor-pointer">
                                    <Link to={item.path}>{item.label}</Link>
                                </li>
                            )
                        )}
                    </ul>

                    <div className="flex flex-col gap-2 mt-4">
                        {navData.buttons.map((btn, i) => (
                            <Button key={i} {...btn} onClick={() => {
                                if (btn.text === "Download Brochure") {
                                    const link = document.createElement("a");
                                    link.href = "/sample.pdf";
                                    link.download = "HightechCabins_Brochure.pdf"; // filename
                                    link.click();
                                } else {
                                    console.log(btn.text);
                                }
                            }} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
