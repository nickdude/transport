import React from "react";
import Button from "./components/Button";
import {
    Phone,
    Mail,
    Globe,
    Clock,
} from "lucide-react";

const ContactUs = () => {
    return (
        <div className="w-full bg-darkblue min-h-screen flex flex-col items-center py-10 px-4">
            {/* Heading */}
            <h2 className="text-white text-2xl md:text-4xl font-semibold mb-6 text-center">
                Contact Us
            </h2>

            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <form className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-lightOrange"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-lightOrange"
                    />
                    <input
                        type="tel"
                        placeholder="Phone No"
                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-lightOrange"
                    />
                    <textarea
                        placeholder="Message"
                        rows="4"
                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-lightOrange"
                    ></textarea>

                    <Button
                        text="Send Message"
                        onClick={(e) => {
                            e.preventDefault();
                            console.log("Message Sent!");
                        }}
                        bgColor="lightOrange"
                        textColor="black"
                        border="none"
                    />
                </form>

                {/* Contact Info */}
                <div className="bg-white rounded-2xl shadow-xl p-8 text-gray-800 flex flex-col justify-center items-start">
                    <h3 className="text-2xl font-bold text-darkblue mb-6 border-b pb-2 w-full">
                        Contact Info
                    </h3>

                    {/* Phone Numbers */}
                    <div className="space-y-4 w-full">
                        <div className="flex items-center gap-4">
                            <div className="bg-lightOrange/20 p-3 rounded-full">
                                <Phone className="w-5 h-5 text-lightOrange" />
                            </div>
                            <span className="text-lg font-medium">+91 9768888228</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-lightOrange/20 p-3 rounded-full">
                                <Phone className="w-5 h-5 text-lightOrange" />
                            </div>
                            <span className="text-lg font-medium">+91 9768822228</span>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-4">
                            <div className="bg-lightOrange/20 p-3 rounded-full">
                                <Mail className="w-5 h-5 text-lightOrange" />
                            </div>
                            <span className="text-lg font-medium">
                                info@jsbcabinsandcontainers.in
                            </span>
                        </div>

                        {/* Website */}
                        <div className="flex items-center gap-4">
                            <div className="bg-lightOrange/20 p-3 rounded-full">
                                <Globe className="w-5 h-5 text-lightOrange" />
                            </div>
                            <span className="text-lg font-medium">
                                www.jsbcabinsandcontainers.in
                            </span>
                        </div>

                        {/* Working Hours */}
                        <div className="flex items-center gap-4">
                            <div className="bg-lightOrange/20 p-3 rounded-full">
                                <Clock className="w-5 h-5 text-lightOrange" />
                            </div>
                            <span className="text-lg font-medium">
                                Monday - Saturday: <span className="font-semibold">9am to 6pm</span>
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-red-100 p-3 rounded-full">
                                <Clock className="w-5 h-5 text-red-500" />
                            </div>
                            <span className="text-lg font-medium text-red-600">
                                Sunday: Closed
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="w-full max-w-5xl border-t border-gray-300 mt-10" />
        </div>
    );
};

export default ContactUs;
