export default function UserProfile(){
    return <>
        <div className="">
            <div className="">
                Address
            </div>
            <div className="max-w-lg mt-1 p-6 bg-white text-black">
            <h2 className="text-lg font-semibold mb-4">Shipping details</h2>
            <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-red-500">First name</label>
                        <input
                            type="text"
                            placeholder="First name"
                            className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2"
                        />
                    </div>
                    <div>
                        <label className="block text-red-500">Last name</label>
                        <input
                            type="text"
                            placeholder="Last name"
                            className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-red-500">Flat / House No. / Floor / Building</label>
                    <input
                        type="text"
                        placeholder="Flat / House No. / Floor / Building"
                        className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2"
                    />
                </div>
                <div>
                    <label className="block text-red-500">Colony/Street/Locality</label>
                    <input
                        type="text"
                        placeholder="Colony/Street/Locality"
                        className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2"
                    />
                </div>
                <div>
                    <label className="block text-red-500">City</label>
                    <input
                        type="text"
                        placeholder="City"
                        className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-red-500">Country/region</label>
                        <select className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2">
                            <option>India</option>
                            <option>USA</option>
                            <option>China</option>
                            <option>Nepal</option>
                            <option>Japan</option>
                            <option>Afganistan</option>
                            <option>Lamda</option>
                            
                        </select>
                    </div>
                    <div>
                        <label className="block text-red-500">Province</label>
                        <select className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2">
                            <option>Andaman and Nicobar Islands</option>
                            <option>India</option>
                            <option>India</option>
                            <option>India</option>
                            <option>India</option>
                            <option>India</option>
                            <option>India</option>
                            
                        </select>
                    </div>
                </div>
                <div>
                    <label className="block text-red-500">Postal/ZIP code</label>
                    <input
                        type="text"
                        placeholder="Postal/ZIP code"
                        className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2"
                    />
                </div>
                <div>
                    <label className="block text-red-500">Phone</label>
                    <input
                        type="text"
                        placeholder="Phone"
                        className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2"
                    />
                </div>
                <div>
                    <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
                        Add Address
                    </button>
                </div>
            </form>
        </div>
        </div>
    </>
}