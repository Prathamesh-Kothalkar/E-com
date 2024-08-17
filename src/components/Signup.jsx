import { ArrowRightAlt } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate= useNavigate();
    return (
        <>
            <div className="w-full h-screen bg-customDark p-5 flex justify-center items-center">
                <div className="w-full max-w-md rounded-md bg-white p-6">
                    <div className="mt-5 flex justify-center">
                        <img src="https://cdn.shopify.com/s/files/1/0745/0201/3236/files/simply-otp-login-banner.png?v=1680004048"
                            alt="Login Banner"
                            className="max-w-full h-auto"
                        />
                    </div>
                    <div className="text-center text-xl text-slate-500">
                        Enter Account Details
                    </div>
                    <div className="flex justify-center">
                        <form action="">
                        <div className="p-2 space-y-4">
                                <TextField label="First Name" variant="outlined" fullWidth />
                                <TextField label="Last Name" variant="outlined" fullWidth />
                                <TextField label="Email" variant="outlined" fullWidth />
                                <TextField label="Phone Number" variant="outlined" fullWidth disabled />
                            </div>
                            <div className="flex mt-2 p-2">
                                <div className="m-2">
                                    <input type="checkbox" id="check" />
                                </div>
                                <div className="text-xl text-slate-600">
                                    <label htmlFor="check">
                                    keep me updated on new updates, exclusive offers
                                    </label>
                                </div>
                            </div>
                            <div className="">
                            <button 
                            onClick={()=>{navigate("/account")}}
                            className="w-full p-2 mt-4 bg-gray-800 peer text-white flex items-center justify-center rounded-md">
                        UPDATE <ArrowRightAlt className="ml-2 hover:translate-x-1 " />
                    </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}