import { ArrowRightAlt, ExpandMore } from "@mui/icons-material";
import React, { useState } from 'react';

export default function Login() {
    const [isCountryCodeOpen, setCountryCodeOpen] = useState(false);

    const toggleDropdown = () => {
        setCountryCodeOpen(!isCountryCodeOpen);
    };

    return (
        <div className="w-full h-screen bg-gray-900 p-5 flex justify-center items-center">
            <div className="w-full max-w-md rounded-md bg-white p-6">
                <div className="mt-5 flex justify-center">
                    <img src="https://cdn.shopify.com/s/files/1/0745/0201/3236/files/simply-otp-login-banner.png?v=1680004048" 
                        alt="Login Banner" 
                        className="max-w-full h-auto" 
                    />
                </div>
                <div className="text-center text-lg mt-4 mb-6">
                    <span className="text-red-600">Login/Register </span>using Mobile
                </div>
                <div>
                    <div className="flex items-center border border-black rounded-lg">
                        <div className="relative">
                            <div
                                className="flex items-center cursor-pointer rounded-md p-2"
                                onClick={toggleDropdown}
                            >
                                <span>🇮🇳 <ExpandMore/></span>
                            </div>

                            {isCountryCodeOpen && (
                                <div className="absolute top-full mt-2 w-60 text-black rounded-md shadow-lg z-20 bg-gray-300">
                                    <div className="grid grid-cols-1 p-2">
                                        <ul>
                                            <li className="w-full p-2 cursor-pointer" onClick={()=>{setCountryCodeOpen(!isCountryCodeOpen)}}>🇮🇳 +91</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                        <input
                            type="tel"
                            placeholder="Phone number"
                            className="p-1  border-black border-l-2 focus:outline-none "
                        />
                    </div>
                    <button className="w-full p-2 mt-3 bg-gray-800 peer text-white flex items-center justify-center rounded-md">
                        REQUEST OTP <ArrowRightAlt className="ml-2 hover:translate-x-1 " />
                    </button>
                </div>
            </div>
        </div>
    );
}
