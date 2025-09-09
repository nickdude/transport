import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

// const images = [
//     "/assets/product.svg",
//     "/assets/product.svg",
//     "/assets/product.svg",
//     "/assets/product.svg",
// ];

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
    <button
        className="absolute right-4 md:right-14 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 z-10"
        onClick={onClick}
    >
        <ChevronRight className="w-5 h-5 text-gray-800" />
    </button>
);

const PrevArrow = ({ onClick }) => (
    <button
        className="absolute left-4 md:left-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 z-10"
        onClick={onClick}
    >
        <ChevronLeft className="w-5 h-5 text-gray-800" />
    </button>
);

const Carousel = ({ images = [] }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "100px", // desktop spacing
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        appendDots: dots => (
            <div className="mt-10">
                <ul className="flex justify-center mt-4 gap-2"> {dots} </ul>
            </div>
        ),
        customPaging: () => (
            <div className="w-3 h-3 bg-gray-400 rounded-full hover:bg-gray-600" />
        ),
        responsive: [
            {
                breakpoint: 1024, // tablet
                settings: {
                    centerPadding: "50px",
                },
            },
            {
                breakpoint: 768, // mobile
                settings: {
                    centerPadding: "20px", // keeps image visible edges
                    arrows: false, // hide arrows for mobile (optional)
                },
            },
        ],
    };

    return (
        <div className="relative w-full max-w-6xl mx-auto px-2 sm:px-4">
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index} className="px-2">
                        <img
                            src={src}
                            alt={`Slide ${index}`}
                            className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-lg"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;

