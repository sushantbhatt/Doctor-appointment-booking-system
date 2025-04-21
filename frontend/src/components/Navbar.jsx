import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

    return (
        <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400 px-4">
            {/* Logo */}
            <img onClick={() => navigate('/')} src={assets.logo} alt="Website Logo" className="w-40 h-auto cursor-pointer" />

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8 font-bold">
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-700' : ''}>
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/doctors" className={({ isActive }) => isActive ? 'text-blue-700' : ''}>
                        ALL DOCTORS
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-700' : ''}>
                        ABOUT
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-700' : ''}>
                        CONTACT
                    </NavLink>
                </li>
            </ul>

            {/* Right Side */}
            <div className="flex items-center gap-4">
                {token ? (
                    <div className="relative group flex items-center gap-2 cursor-pointer">
                        <img className="w-10 h-10 rounded-full" src={assets.profile_pic} alt="Profile" />
                        <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
                        <div className="absolute top-10 right-0 bg-white w-[128px] shadow-md p-3 text-sm text-gray-600 rounded hidden group-hover:block">
                            <p onClick={() => navigate('/my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                            <p onClick={() => navigate('/AppointmentsDoctor')} className="hover:text-black cursor-pointer">My Appointment</p>
                            <p onClick={() => setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={() => navigate('/login')}
                        className="bg-blue-500 text-white px-8 py-3 rounded-full font-light hidden md:block"
                    >
                        Create Account
                    </button>
                )}

                {/* Mobile menu icon */}
                <img onClick={() => setShowMenu(true)} className="w-6 md:hidden cursor-pointer" src={assets.menu_icon} alt="Menu" />
            </div>

            {/* Mobile Menu */}
            <div className={`${showMenu ? 'fixed w-full h-full' : 'w-0 h-0'} md:hidden right-0 top-0 z-30 overflow-hidden bg-white transition-all`}>
                <div className="flex items-center justify-between px-5 py-6 border-b border-gray-300">
                    <img className="w-32" src={assets.logo} alt="Logo" />
                    <img
                        className="w-8 h-8 cursor-pointer"
                        onClick={() => setShowMenu(false)}
                        src={assets.cross_icon}
                        alt="Close"
                    />
                </div>

                <ul className="flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium">
                    <li>
                        <NavLink
                            to="/"
                            onClick={() => setShowMenu(false)}
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded w-full text-center transition ${
                                    isActive ? 'bg-blue-600 text-white' : 'text-gray-700'
                                }`
                            }
                        >
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/doctors"
                            onClick={() => setShowMenu(false)}
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded w-full text-center transition ${
                                    isActive ? 'bg-blue-600 text-white' : 'text-gray-700'
                                }`
                            }
                        >
                            ALL DOCTORS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            onClick={() => setShowMenu(false)}
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded w-full text-center transition ${
                                    isActive ? 'bg-blue-600 text-white' : 'text-gray-700'
                                }`
                            }
                        >
                            ABOUT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            onClick={() => setShowMenu(false)}
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded w-full text-center transition ${
                                    isActive ? 'bg-blue-600 text-white' : 'text-gray-700'
                                }`
                            }
                        >
                            CONTACT
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
