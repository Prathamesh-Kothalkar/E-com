import React, { useState } from 'react';
import { Menu, Close, Search, ShoppingCart, ArrowDownward, ArrowUpward, ExpandMore, ExpandLess } from '@mui/icons-material';
import { Transition } from '@headlessui/react';
import { Avatar } from '@mui/material';
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSubNavOpen, setIsSubNavOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };




    return <>
        <header className="bg-black text-white">
            <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">

                <div className="text-2xl font-bold">
                    <a href="#">ShopVerse</a>
                </div>


                <div className="hidden md:flex space-x-6">

                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="hover:text-gray-400 bg-transparent cursor-pointer text-xl focus:outline-none"
                        >
                            Products {isDropdownOpen ? <ArrowUpward /> : <ArrowDownward />}
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute left-0 mt-2 w-60 text-black rounded-md shadow-lg z-20 bg-black">
                                <div className="grid grid-cols-3 p-2 m-2 ">
                                    <a href="#" className="hover:bg-gray-800 text-white p-1">Product 1</a>
                                    <a href="#" className="hover:bg-gray-800 text-white p-1">Product 2</a>
                                    <a href="#" className="hover:bg-gray-800 text-white p-1">Product 3</a>
                                    <a href="#" className="hover:bg-gray-800 text-white p-1">Product 4</a>
                                    <a href="#" className="hover:bg-gray-800 text-white p-1">Product 5</a>
                                    <a href="#" className="hover:bg-gray-800 text-white p-1">Product 6</a>
                                </div>
                            </div>
                        )}
                    </div>
                    <a href="#" className="hover:text-gray-400 text-xl">Item 1</a>
                    <a href="#" className="hover:text-gray-400 text-xl">For Her</a>
                    <a href="#" className="hover:text-gray-400 text-xl">Best Seller</a>
                    <a href="#" className="hover:text-gray-400 text-xl">New Launch</a>
                </div>


                <div className="hidden md:flex space-x-4 items-center">
                    <Search className="hover:text-gray-400 cursor-pointer mt-1" />
                    <ShoppingCart className="hover:text-gray-400 cursor-pointer mt-1" />

                    {/* Avatar and Dropdown */}
                    <div className='relative flex items-center cursor-pointer hover:bg-blue-600 rounded-md p-2' onClick={() => { setIsSubNavOpen(!isSubNavOpen) }}>
                        <Avatar className='w-9 h-9' />
                        <span className="hover:text-gray-400 text-md mx-2">Login {isSubNavOpen ? <ExpandLess /> : <ExpandMore />}</span>

                        {/* Dropdown */}
                        {isSubNavOpen && (
<                            div className="absolute top-full right-0 mt-2 w-48 text-white rounded-md shadow-lg z-20 bg-black">
                                <div className="grid grid-cols-1 p-2">
                                   <ul>
                                    <li className='hover:bg-gray-800 text-white p-1'><a href=""> New Customer Sign up</a></li>
                                    <li className='hover:bg-gray-800 text-white p-1'><hr /></li>
                                    <li className='hover:bg-gray-800 text-white p-1'>My Account</li>
                                    <li className='hover:bg-gray-800 text-white p-1'>Wishlist</li>
                                   </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>



                <div className="md:hidden">
                    <Menu className="cursor-pointer" onClick={toggleMenu} />
                </div>
            </nav>


            <Transition
                show={isOpen}
                enter="transition ease-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in duration-200 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
            >
                <div className={`fixed top-0 left-0 w-64 h-full bg-black p-4 z-50 ${isOpen ? 'block' : 'hidden'}`}>
                    <div className="flex justify-end">
                        <Close className="cursor-pointer" onClick={toggleMenu} />
                    </div>
                    <ul className="mt-8 space-y-6">
                        <li><a href="#" className="hover:text-gray-400">Products</a></li>
                        <li><a href="#" className="hover:text-gray-400">Item</a></li>
                        <li><a href="#" className="hover:text-gray-400">For Her</a></li>
                        <li><a href="#" className="hover:text-gray-400">Best Seller</a></li>
                        <li><a href="#" className="hover:text-gray-400">New Launch</a></li>
                        <li className="flex items-center space-x-2">
                            <Search className="hover:text-gray-400 cursor-pointer" />
                            <a href="#" className="hover:text-gray-400">Search</a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <ShoppingCart className="hover:text-gray-400 cursor-pointer" />
                            <a href="#" className="hover:text-gray-400">Cart</a>
                        </li>
                        <li><a href="#" className="hover:text-gray-400">Login</a></li>
                    </ul>
                </div>
            </Transition>
        </header>
    </>
}