import React from "react";
import Button from "./Button";
import heroContent from "../data/heroContent";
import { useNavigate } from "react-router-dom";

const HeroSection = ({ label }) => {
    const navigate = useNavigate();

    return (
        <div className="w-full h-[575px] relative flex flex-col items-center justify-center overflow-hidden">
            {/* Background Images */}
            <img
                src="./assets/hero-desktop.svg"
                alt="hero-desktop"
                className="hidden md:block w-full h-full object-cover absolute top-0 left-0 z-0"
            />
            <img
                src="./assets/hero-mobile.svg"
                alt="hero-mobile"
                className="md:hidden w-full h-full object-cover absolute top-0 left-0 z-0"
            />

            {/* Black Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
                {label == "Welcome to Hightech Cabins & Containers" && (
                    <img
                        src={heroContent.logoPath}
                        alt="hero-logo"
                        className="w-[540px] mb-1 md:w-[540px] sm:w-[300px]"
                    />
                )}
                <h1 className="text-white text-xl md:text-2xl lg:text-3xl leading-8 font-medium mb-8">
                    {label}
                </h1>
                <Button
                    text={heroContent.button.text}
                    onClick={() => navigate("/contact")}
                    bgColor={heroContent.button.bgColor}
                    textColor={heroContent.button.textColor}
                    border={heroContent.button.border}
                />
            </div>
        </div>
    );
};

export default HeroSection;
