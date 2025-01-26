import React, { useState, useEffect, useRef } from 'react';
import logo from "../images/maybetslogo.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Create a reference to the dropdown container

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setIsDropdownOpen(false);

  const isLoggedIn = true; // Update this with actual login state

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click was outside of the dropdownRef (both the button and the dropdown menu)
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="w-full  ">
      <div className="max-w-7xl py-3 mx-auto px-2 sm:px-6 lg:px-8">
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
          <div className="hidden sm:block sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <a
              href="#home"
              className="text-white text-sm hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md font-medium transition-all duration-200 ease-in-out"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white text-sm hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md font-medium transition-all duration-200 ease-in-out"
            >
              About
            </a>
            <a
              href="#sports"
              className="text-white text-sm hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md font-medium transition-all duration-200 ease-in-out"
            >
              Sports
            </a>
            <a
              href="#contact"
              className="text-white text-sm hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md font-medium transition-all duration-200 ease-in-out"
            >
              Contact
            </a>

            {isLoggedIn ? (
              <div className="flex items-center bg-white rounded-full space-x-4">
                <div ref={dropdownRef} className="relative dropdown rounded-full bg-white">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center space-x-2 text-white px-4 py-2 text-base font-medium transition-all duration-200 ease-in-out"
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
                        href="#login"
                        onClick={closeMenu}
                        className="block px-4 py-2 text-[1] font-medium rounded-t-lg text-black bg-white hover:bg-blue-100"
                      >
                        Login
                      </a>
                      <a
                        href="#signup"
                        onClick={closeMenu}
                        className="block px-4 py-3 text-[1] rounded-b-lg font-medium bg-white text-black hover:bg-blue-100"
                      >
                        Sign Up
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
        </div>
      </div>

      {/* Off-canvas Menu (Mobile Only) */}
      <div
        className={`fixed inset-0 left-0 w-64 z-50 transform h-screen ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform ease-in-out duration-300 sm:hidden`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white">
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
        <div className="px-4 py-5 space-y-4">
          <a
            href="#home"
            onClick={closeMenu}
            className="text-slate-200 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ease-in-out"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={closeMenu}
            className="text-slate-200 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ease-in-out"
          >
            About
          </a>
          <a
            href="#sports"
            onClick={closeMenu}
            className="text-slate-200 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ease-in-out"
          >
            Sports
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="text-slate-200 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ease-in-out"
          >
            Contact
          </a>
          <div className="text-slate-200">
            <button
              onClick={closeMenu}
              className="w-full py-2 rounded-md bg-blue-600 text-white"
            >
              LOGIN
            </button>
            <button
              onClick={closeMenu}
              className="w-full mt-3 py-2 rounded-md bg-lime-700 text-white"
            >
              JOIN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
