import React, { useState, useEffect, useRef } from 'react';
import logo from "../images/maybetslogo.webp";
import { FaCircle, FaDotCircle, FaEllipsisH, FaEllipsisV } from 'react-icons/fa';
import UserMenuPopover from '../components/Menupopover';
import Menupopover from '../components/Menupopover';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false); // State for popover visibility
    const dropdownRef = useRef(null);
  
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);
  
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const closeDropdown = () => setIsDropdownOpen(false);
  
    const togglePopover = () => setIsPopoverOpen(!isPopoverOpen); // Toggle popover
  
    const isLoggedIn = true; // Update this with actual login state

    // Close dropdown when clicking outside
    // const toggleDropdown = () => {
    //     setIsDropdownOpen((prev) => !prev);
    //   };
    
      useEffect(() => {
        const handleClickOutside = (event) => {
          // Check if the click was outside both the dropdown and the button
          if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target) &&
            !buttonRef.current.contains(event.target)
          ) {
            setIsDropdownOpen(false);
          }
        };
    
        // Add the event listener for clicks outside the dropdown
        document.addEventListener("click", handleClickOutside);
    
        // Cleanup the event listener on component unmount or dependency change
        return () => document.removeEventListener("click", handleClickOutside);
      }, []);
    return (
        <nav className="w-full  ">
            <div className="max-w-full py-3 mx-auto px-2 sm:px-6 lg:px-2">
                <div className="relative  flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0 text-white text-xl font-semibold">
                            <img src={logo} className="mt-4" width={100} height={50} alt="Logo" />
                        </div>
                    </div>

                    {/* Mobile Menu Button (Moved to the right) */}
                    <div className="sm:hidden flex items-center ml-auto">
                        <div className='flex gap-4 items-center'>
                            <button className='border border-[#2EB839] hover:border-lime-600 rounded-md px-5 text-white text-sm py-2'>LOGIN</button>
                            <button className='bg-[#2EB839] hover:bg-lime-600 text-sm font-bold text-white rounded-md px-5 py-2'>JOIN</button>
                        </div>
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-white pl-3 hover:text-gray-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="block h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Navbar Content for Desktop */}
                    <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4 sm:justify-between lg:space-x-6 lg:ml-auto">
                    <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4 sm:justify-between lg:space-x-6 lg:ml-auto">
    <a
        href="#home"
        className="text-white text-[12px]  underline-animation hover:text-white px-3 py-2 rounded-md font-medium transition-all duration-200 ease-in-out"
    >
        Home
    </a>
    <a
        href="#about"
        className="text-white text-[12px] underline-animation hover:text-white px-3 py-2 rounded-md font-medium transition-all duration-200 ease-in-out"
    >
        About
    </a>
    <a
        href="#sports"
        className="text-white text-[12px] underline-animation hover:text-white px-3 py-2 rounded-md font-medium transition-all duration-200 ease-in-out"
    >
        Sports
    </a>
  
    <a
        href="#odds"
        className="text-white text-[12px] underline-animation hover:text-white px-3 py-2 rounded-md font-medium transition-all duration-200 ease-in-out"
    >
        Odds
    </a>
  
    <a
        href="#results"
        className="text-white text-[12px] underline-animation hover:text-white px-3 py-2 rounded-md font-medium transition-all duration-200 ease-in-out"
    >
        Results
    </a>
  
    <a
        href="#faq"
        className="text-white text-[12px] underline-animation hover:text-white px-3 py-2 rounded-md font-medium transition-all duration-200 ease-in-out"
    >
        FAQ
    </a>
    <a
        href="#contact"
        className="text-white text-[12px] underline-animation hover:text-white px-3 py-2 rounded-md font-medium transition-all duration-200 ease-in-out"
    >
        Contact
    </a>
</div>

   
    <a href="#" onClick={togglePopover} className="popover-toggle">
        <div className="grid grid-cols-2 gap-1 text-white">
            {/* Popover toggle icon or content can be added here */}
        </div>
    </a>

    {isLoggedIn ? (
        <div className="flex items-center bg-white rounded-full space-x-4 lg:space-x-2">
            <div ref={dropdownRef} className="relative dropdown rounded-full bg-white">
                <button
                    onClick={toggleDropdown}
                    className="flex items-center space-x-2 text-white px-3 py-2 text-base font-medium transition-all duration-200 ease-in-out"
                >
                    <img
                        src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full"
                    />
                    <svg
                        className="w-5 h-5 bg-white text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
                
                {isDropdownOpen && (
                    <div className="absolute right-0 w-48 mt-7 bg-white text-black rounded-md z-50">
                        <a
                            href="#profile"
                            onClick={closeMenu}
                            className="block px-4 py-2 text-[1] font-medium rounded-t-lg text-black bg-white hover:bg-blue-100"
                        >
                            Profile
                        </a>
                        <a
                            href="#settings"
                            onClick={closeMenu}
                            className="block px-4 py-3 text-[1] rounded-b-lg font-medium bg-white text-black hover:bg-blue-100"
                        >
                            Settings
                        </a>
                        <a
                            href="#logout"
                            onClick={closeMenu}
                            className="block px-4 py-3 text-[1] rounded-b-lg font-medium bg-white text-black hover:bg-blue-100"
                        >
                            Logout
                        </a>
                    </div>
                )}
            </div>
        </div>
    ) : (
        <div className="flex bg-white z-50 space-x-4">
            <a
                href="#login"
                onClick={closeMenu}
                className="text-white bg-blue-200 hover:bg-blue-800 px-4 py-2 rounded-md text-base font-medium transition-all duration-200 ease-in-out"
            >
                Login
            </a>
            <a
                href="#signup"
                onClick={closeMenu}
                className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-base font-medium transition-all duration-200 ease-in-out"
            >
                Join
            </a>
        </div>
    )}
</div>

<Menupopover />



                </div>
                
            </div>

            {/* Off-canvas Menu (Mobile Only) */}
            <div
                className={`fixed inset-0 left-0 w-64 z-50 transform h-screen ${
                    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform ease-in-out duration-300 sm:hidden`}
            >
                <div className="flex items-center bg-red-500 justify-between p-4 border-b border-white">
                    <div className="text-white text-xl pt-4 font-semibold">
                        <img src={logo} className="w-[80px]" alt="Logo" />
                    </div>
                    <button
                        type="button"
                        className="text-white"
                        onClick={closeMenu}
                    >
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div className="px-4 py-5 bg-[#0B1428] h-screen space-y-6 text-white">
                    <a
                        href="#home"
                        className="block px-4 py-2 text-base font-medium transition-all duration-200 ease-in-out"
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="block px-4 py-2 text-base font-medium transition-all duration-200 ease-in-out"
                    >
                        About
                    </a>
                    <a
                        href="#sports"
                        className="block px-4 py-2 text-base font-medium transition-all duration-200 ease-in-out"
                    >
                        Sports
                    </a>
            
    
  
    <a
        href="#odds"
        className="block px-4 py-2 text-base font-medium transition-all duration-200 ease-in-out"
        >
        Odds
    </a>
  
    <a
        href="#results"
        className="block px-4 py-2 text-base font-medium transition-all duration-200 ease-in-out"
        >
        Results
    </a>
                    <a
                        href="#contact"
                        className="block px-4 py-2 text-base font-medium transition-all duration-200 ease-in-out"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
