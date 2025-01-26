import React, { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const CardCarousel = () => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  // Scroll handler
  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

      // Update scroll position
      setTimeout(() => {
        const currentScroll = containerRef.current.scrollLeft;
        setScrollPosition(currentScroll);
        setMaxScroll(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
      }, 200);
    }
  };

  const cards = [
    { title: "My Favorites", description: "All your favorite teams and events" },
    { title: "Today's Football", description: "Matches scheduled for today" },
    { title: "Football in the Next 3 Hours", description: "Upcoming matches in the next 3 hours" },
    { title: "Basketball Games", description: "Catch the latest basketball events" },
    { title: "Tennis Matches", description: "Upcoming tennis events" },
    { title: "Live Sports", description: "Watch live games as they happen" },
  ];

  return (
    <div className="relative flex items-center w-full py-6 overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className={`absolute left-2 z-10 p-3 bg-gray-800 text-white rounded-full shadow-lg transition-all lg:hidden ${
          scrollPosition <= 0 ? "hidden" : "block"
        }`}
      >
        <FiChevronLeft size={24} />
      </button>

      {/* Cards Container */}
      <div
        ref={containerRef}
        className="flex mx-2 overflow-x-auto scrollbar-none gap-6 px-6 lg:gap-12 lg:overflow-x-auto lg:justify-start"
      >
        {cards.map(({ title, description }, index) => (
          <div
            key={index}
            className="flex  flex-col items-start space-y-2 snap-start border-t-yellow-500 border border-gray-800  bg-gray-800 text-white rounded-lg p-4 w-56 h-48 overflow-hidden flex-shrink-0"
          >
            <h3 className="font-semibold pt-3 text-lg bg-gray-800 text-ellipsis overflow-hidden">{title}</h3>
            <p className="text-sm text-left bg-gray-800 break-words">{description}</p>
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
            /* Adjustments for small screens */
            .snap-x > div > div {
              gap: 0.5rem;
            }

            .snap-x > div > div > div {
              padding: 0.25rem;
              width: 160px; /* Adjusted card width */
              height: 220px; /* Adjusted card height */
            }

            .snap-x > div > div > h3 {
              font-size: 0.9rem;
              word-wrap: break-word; /* Allow wrapping for long titles */
              white-space: normal;
            }

            .snap-x > div > div > p {
              font-size: 0.75rem;
              word-wrap: break-word; /* Allow wrapping for long descriptions */
            }
          }

          @media (min-width: 1024px) {
            .snap-x > div > div {
              gap: 1rem;
            }

            .snap-x > div > div > div {
              padding: 0.4rem;
              width: 280px; /* Increased card width */
              height: 320px; /* Adjusted card height */
            }

            .snap-x > div > div > h3 {
              font-size: 1.1rem;
            }

            .snap-x > div > div > p {
              font-size: 0.9rem;
            }
          }

          @media (min-width: 1280px) {
            .snap-x > div > div > div {
              width: 320px; /* Adjusted card width for larger screens */
              height: 360px; /* Adjusted card height */
            }
          }
        `}
      </style>
    </div>
  );
};

export default CardCarousel;
