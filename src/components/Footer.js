import React from "react";
import { Link } from "react-router-dom";
import IconButton from "./IconButton";
import footerData from "../data/footerItems";

const Footer = () => {
    return (
        <div className="w-full h-fit bg-darkblue text-white px-10 md:px-24 pt-24 pb-10">
            {/* Logo */}
            <img src={footerData.logo} alt="hitech-logo" className="w-20" />

            {/* Main Sections */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
                {/* About */}
                <div className="text-left pr-10">
                    <h1 className="w-3/4 mb-4 text-base font-semibold">
                        {footerData.about.title}
                    </h1>
                    <p className="text-sm font-normal mb-3">{footerData.about.description}</p>
                </div>

                {/* Contacts */}
                <div className="text-left pr-10">
                    <h1 className="w-3/4 mb-4 text-base font-semibold">
                        {footerData.contacts.title}
                    </h1>
                    <p className="text-sm font-normal mb-3">{footerData.contacts.phone}</p>
                    <p className="text-sm font-normal mb-3">{footerData.contacts.email}</p>
                    <p className="text-sm font-normal mb-3">{footerData.contacts.address}</p>
                </div>

                {/* Links */}
                <div className="text-left pr-10">
                    <h1 className="w-3/4 mb-4 text-base font-semibold">
                        {footerData.links.title}
                    </h1>
                    {footerData.links.items.map((link, i) => (
                        <p key={i} className="text-sm font-normal mb-3">
                            <Link to={link.path}>{link.label}</Link>
                        </p>
                    ))}
                </div>

                {/* Social */}
                <div className="text-left pr-10">
                    <h1 className="w-3/4 mb-4 text-base font-semibold">
                        {footerData.social.title}
                    </h1>
                    <div className="flex gap-2">
                        {footerData.social.icons.map((icon, i) => (
                            <a href={icon.url} key={i} target="_blank" rel="noopener noreferrer">
                                <IconButton path={icon.path} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Links */}
            <hr className="border-t border-white mt-10" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                <p className="text-xs font-normal">{footerData.bottomLinks.copyright}</p>
                <p className="text-xs font-normal">
                    <Link to={footerData.bottomLinks.terms.path}>
                        {footerData.bottomLinks.terms.label}
                    </Link>
                </p>
                <p className="text-xs font-normal">
                    <Link to={footerData.bottomLinks.privacy.path}>
                        {footerData.bottomLinks.privacy.label}
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Footer;
