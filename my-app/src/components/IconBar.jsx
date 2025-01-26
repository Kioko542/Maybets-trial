import React, { useRef, useState } from "react";
import {
  FaHome,
  FaTv,
  FaFutbol,
  FaGamepad,
  FaCog,
  FaStar,
  FaTrophy,
  FaBasketballBall,
  FaCircle,
} from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Menupopover from "../components/Menupopover";

const IconBar = () => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  // Scroll handler
  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

      // Update scroll position
      setTimeout(() => {
        const currentScroll = containerRef.current.scrollLeft;
        setScrollPosition(currentScroll);
        setMaxScroll(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
      }, 200);
    }
  };

  const icons = [
    { icon: FaHome, label: "Home" },
    { icon: FaTv, label: "TV" },
    { icon: FaFutbol, label: "Football" },
    { icon: FaGamepad, label: "Games" },
    { icon: FaCog, label: "Settings" },
    { icon: FaStar, label: "Star" },
    { icon: FaTrophy, label: "Trophy" },
    { icon: FaBasketballBall, label: "Basketball" },
  ];

  return (
    <div className="relative flex items-center w-full py-6 lg:justify-center">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className={`absolute left-2 z-10 p-3 bg-gray-800 text-white rounded-full shadow-lg transition-all lg:hidden ${
          scrollPosition <= 0 ? "hidden" : "block"
        }`}
      >
        <FiChevronLeft size={24} />
      </button>

      {/* Icons Container */}
      <div
        ref={containerRef}
        className="flex mx-2 overflow-x-scroll scrollbar-none snap-x snap-mandatory gap-6 px-6 lg:gap-12 lg:overflow-visible lg:justify-center"
      >
        
        {icons.map(({ icon: Icon, label }, index) => (
            
          <div
            key={index}
            className="flex flex-col items-center space-y-2 snap-start lg:space-y-4"
          >
            
            <div className="p-3 border rounded-full border-gray-500 text-gray-400 lg:p-5">
              <Icon size={20} className="lg:w-5 lg:h-5" />
            </div>
            <span className="text-sm text-gray-400 lg:text-base">{label}</span>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className={`absolute right-2 z-10 p-3 bg-gray-800 text-white rounded-full shadow-lg transition-all lg:hidden ${
          scrollPosition >= maxScroll ? "hidden" : "block"
        }`}
      >
        <FiChevronRight size={24} />
      </button>

      {/* Styling */}
      <style>
        {`
          /* Hide default scrollbars */
          .scrollbar-none::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-none {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          @media (max-width: 768px) {
            /* More compact spacing for mobile */
            .snap-x > div > div {
              gap: 0.25rem; /* Even smaller gap for tighter spacing */
            }

            .snap-x > div > div > div {
              padding: 0.2rem; /* Even smaller padding for the border */
              width: 24px; /* Reduced width for the icon container */
              height: 24px; /* Reduced height for the icon container */
            }

            .snap-x > div > div > span {
              font-size: 0.6rem; /* Even smaller font size for the label */
              margin-top: 0.2rem; /* Adjusted label spacing */
            }

            /* Reduced icon size for mobile */
            .snap-x > div > div > div .lg\:w-5, 
            .snap-x > div > div > div .lg\:h-5 {
              width: 16px; /* Set icon size smaller */
              height: 16px;
            }
          }

          @media (min-width: 1024px) {
            /* Slightly reduced icon size and padding for desktop */
            .snap-x > div > div {
              gap: 1rem;
            }

            .snap-x > div > div > div {
              padding: 0.4rem;
            }

            .snap-x > div > div > span {
              font-size: 0.3rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default IconBar;
