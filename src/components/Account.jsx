import { useState } from "react";
import UserProfile from "./UserProfile";
import Order from "./Order";

export default function Account() {
    const [isProfile, setIsProfile] = useState(false);

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-9  bg-customDark text-white">
            <div className="md:col-span-1 m-5">
                <div className="text-4xl mb-8">Account</div>
                <div className="mb-8">
                    <button className="border border-white px-4 py-2 rounded hover:bg-[#191919]">
                        Log out
                    </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-1">
                    <p
                        onClick={() => setIsProfile(false)}
                        className={`m-2 p-3 cursor-pointer ${!isProfile && 'text-red-500 border-b-4 md:border-l-4 md:border-b-0 border-red-500 '}`}
                    >
                        Orders
                    </p>
                    <p
                        onClick={() => setIsProfile(true)}
                        className={`m-2 p-3 cursor-pointer ${isProfile && 'text-red-500 border-b-4 md:border-l-4 md:border-b-0 border-red-500 '}`}
                    >
                        Profile
                    </p>
                </div>
            </div>
            <div className="md:col-span-3">
                {isProfile ? <UserProfile /> : <Order />}
            </div>
        </div>
    );
}
