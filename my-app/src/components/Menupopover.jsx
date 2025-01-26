import React, { useState, useEffect, useRef } from "react";
import { FaCircle, FaTimes } from "react-icons/fa"; // Added FaTimes for the close button
import { FiSun } from "react-icons/fi";
import { GiBasketballBall, GiTennisRacket, GiBoxingGlove } from "react-icons/gi";
import { MdSportsVolleyball, MdOutlineCasino, MdLeaderboard } from "react-icons/md";
import { RiGameLine } from "react-icons/ri";
import { IoMdFootball } from "react-icons/io";

const UserMenuPopover = ({ closePopover }) => {
  
  return (
    <div
      className="absolute top-12 right-0 bg-white border border-gray-300 rounded-lg p-4 shadow-lg w-[300px] sm:w-[500px] z-50 text-left transition-all duration-300 ease-in-out"
      role="menu"
      aria-label="User Menu"
    >
      {/* Close Button */}
      <button
        onClick={closePopover}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        aria-label="Close"
      >
        <FaTimes />
      </button>
      
      {/* Display Section */}
      <div>
        <h4 className="text-sm font-semibold text-lime-600">Display</h4>
        <ul className="list-none p-0 m-0">
          <li className="flex items-center py-2 text-gray-800 cursor-not-allowed">
            <FiSun className="text-gray-900 rounded-full bg-gray-200 p-1" />
            <span className="text-black pl-2">Light & Dark Theme</span>
          </li>
        </ul>
      </div>

      {/* Games Section */}
      <section>
        <h4 className="text-sm font-semibold text-gray-700">Games</h4>
        <ul>
          <li
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
            onClick={closePopover}
          >
            <RiGameLine className="mr-2 rounded-full bg-gray-200 p-1" /> Crash
          </li>
          <li
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
            onClick={closePopover}
          >
            <RiGameLine className="mr-2 rounded-full bg-gray-200 p-1" /> Spin2Win
          </li>
          <li
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
            onClick={closePopover}
          >
            <RiGameLine className="mr-2 rounded-full bg-gray-200 p-1" /> JetX
          </li>
          <li
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
            onClick={closePopover}
          >
            <RiGameLine className="mr-2 rounded-full bg-gray-200 p-1" /> AZ Countries
          </li>
        </ul>
      </section>

      {/* Sports Section */}
      <section>
        <h4 className="text-sm font-semibold text-gray-700">Sports</h4>
        <ul>
          <li
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
            onClick={closePopover}
          >
            <GiBasketballBall className="mr-2 rounded-full bg-gray-200 p-1" /> Basketball
          </li>
          <li
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
            onClick={closePopover}
          >
            <MdSportsVolleyball className="mr-2 rounded-full bg-gray-200 p-1" /> Volleyball
          </li>
          <li
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
            onClick={closePopover}
          >
            <GiTennisRacket className="mr-2 rounded-full bg-gray-200 p-1" /> Tennis
          </li>
          <li
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
            onClick={closePopover}
          >
            <IoMdFootball className="mr-2 rounded-full bg-gray-200 p-1" /> Rugby
          </li>
          <li
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
            onClick={closePopover}
          >
            <GiBoxingGlove className="mr-2 rounded-full bg-gray-200 p-1" /> Boxing
          </li>
        </ul>
      </section>

      {/* Offers Section */}
      <section>
        <h4 className="text-sm font-semibold text-gray-700">Offers</h4>
        <ul>
          <li
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
            onClick={closePopover}
          >
            <MdOutlineCasino className="mr-2 rounded-full bg-gray-200 p-1" /> FreeBet
          </li>
          <li
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
            onClick={closePopover}
          >
            <MdOutlineCasino className="mr-2 rounded-full bg-gray-200 p-1" /> Dosika na EPL
          </li>
          <li
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
            onClick={closePopover}
          >
            <MdOutlineCasino className="mr-2 rounded-full bg-gray-200 p-1" /> Sharebet
          </li>
          <li
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
            onClick={closePopover}
          >
            <MdOutlineCasino className="mr-2 rounded-full bg-gray-200 p-1" /> Casino Offers
          </li>
        </ul>
      </section>

      {/* Access Section */}
      <section>
        <h4 className="text-sm font-semibold text-gray-700">Access</h4>
        <ul>
          <li
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
            onClick={closePopover}
          >
            <FaCircle className="mr-2 rounded-full bg-gray-200 p-1" /> App
          </li>
          <li
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
            onClick={closePopover}
          >
            <MdLeaderboard className="mr-2 rounded-full bg-gray-200 p-1" /> Leaderboard
          </li>
          <li
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
            onClick={closePopover}
          >
            <FaCircle className="mr-2 rounded-full bg-gray-200 p-1" /> FAQs
          </li>
        </ul>
      </section>
    </div>
  );
};

const Menupopover = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);

  // Close the popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setIsPopoverOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle popover open and close
  const togglePopover = () => {
    setIsPopoverOpen(prev => !prev); // Simply toggle the popover state
  };
  
  const closePopover = () => {
    setIsPopoverOpen(false); // Close the popover explicitly
  };

  return (
    <div className="relative">
      <button
        className="text-sm text-gray-700 focus:outline-none"
        aria-haspopup="menu"
        onClick={togglePopover}
      >
        <div className="grid grid-cols-2 gap-1 pl-4 mb-2 hover:text-[#0FA018] text-gray-100">
          <FaCircle
            className="w-2 h-2 rounded-full bg-gray-200"
          />
          <FaCircle
            className="w-2 h-2 rounded-full bg-gray-200"
          />
          <FaCircle
            className="w-2 h-2 rounded-full bg-gray-200"
          />
          <FaCircle
            className="w-2 h-2 rounded-full bg-gray-200"
          />
        </div>
      </button>

      {isPopoverOpen && (
        <UserMenuPopover closePopover={closePopover} />
      )}
    </div>
  );
};

export default Menupopover;
