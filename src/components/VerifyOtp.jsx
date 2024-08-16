import { ArrowRightAlt, Edit } from "@mui/icons-material";
import React, { useState, useRef } from 'react';

export default function VerifyOtp(){
    const [otp, setOtp] = useState(Array(6).fill(''));
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const { value } = e.target;
        if (/[^0-9]/.test(value)) return; 
        const newOtp = [...otp];
        newOtp[index] = value.slice(-1); 
        setOtp(newOtp);

        
        if (index < 5 && value) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <>
            <div className="w-full h-screen bg-gray-900 p-5 flex justify-center items-center">
                <div className="w-full max-w-md rounded-md bg-white p-6">
                <div className="mt-5 flex justify-center">
                    <img src="https://cdn.shopify.com/s/files/1/0745/0201/3236/files/simply-otp-login-banner.png?v=1680004048" 
                        alt="Login Banner" 
                        className="max-w-full h-auto" 
                    />
                </div>
                <div className="text-center text-xl text-slate-500">
                Enter OTP
                </div>
                <div className="text-center text-xl mt-4">
                The OTP is sent on Mobile number
                </div>
                <div className="text-center text-xl mt-4">
                    +91 <Edit className="cursor-pointer"/>
                </div>
                <div className="">
                    <form action="">
                        <div className="">
                        <div className="flex justify-center space-x-2 mt-3">
            {otp.map((_, index) => (
                <input
                    key={index}
                    type="text"
                    value={otp[index]}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    maxLength="1"
                    className="w-8 h-10 text-center border-black border-b  focus:outline-none "
                />
            ))}
        </div>
                        </div>
                        <button className="w-full p-2 mt-4 bg-gray-800 peer text-white flex items-center justify-center rounded-md">
                        VERIFY OTP <ArrowRightAlt className="ml-2 hover:translate-x-1 " />
                    </button>
                    </form>
                </div>
                <div className="text-center text-slate-400 text-xl mt-4">
                Didn't Receive the OTP?
                </div>
                <div className="text-center text-red-500 text-xl mt-4">
                Resend OTP
                </div>
                </div>
            </div>
        </>
    )
}