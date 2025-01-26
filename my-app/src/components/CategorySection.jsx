import React, { useState, useEffect } from "react";

const CategorySection = () => {
  const [loading, setLoading] = useState(true);

  const categories = ["Live", "Matches", "Games", "Coded"];
  const teamLogos = [
    { name: "Manchester United", logoUrl: "https://i.pinimg.com/736x/71/5f/2a/715f2abd7ff709d7c0b303f9f3eee18c.jpg" },
    { name: "Liverpool", logoUrl: "https://i.pinimg.com/736x/bc/16/5d/bc165d74fa7c0a79a89ff1fcf5db2678.jpg" },
    { name: "Real Madrid", logoUrl: "https://i.pinimg.com/736x/ba/62/fb/ba62fbd06c21f6d2c02a7e21d25815fa.jpg" },
    { name: "Barcelona", logoUrl: "https://i.pinimg.com/736x/80/65/c9/8065c9e0231029e8fda40e7eaeb0d933.jpg" },
    { name: "Bayern Munich", logoUrl: "https://i.pinimg.com/736x/01/25/7c/01257cc203ea2a84a4aa5dcfbcffb3ce.jpg" },
  ];

  const matches = [
    { team1: "Manchester United", team2: "Liverpool", score1: 2, score2: 1 },
    { team1: "Real Madrid", team2: "Barcelona", score1: 3, score2: 1 },
    { team1: "Bayern Munich", team2: "Liverpool", score1: 3, score2: 2 },
    { team1: "Manchester United", team2: "Real Madrid", score1: 1, score2: 1 },
    { team1: "Bayern Munich", team2: "Barcelona", score1: 2, score2: 0 },
  ];

  // Simulate a loading delay (you can replace this with actual data fetching logic)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Data is loaded after 2 seconds
    }, 2000);
  }, []);

  return (
    <div className="py-8">
      {/* Category Options */}
      <div className="flex space-x-6 mb-6">
        {loading ? (
          // Loading placeholders for categories
          <div className="w-16 h-6 bg-gray-300 rounded-full animate-pulse" />
        ) : (
          categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 text-md font-thin text-white rounded-full hover:bg-gray-600 transition relative"
            >
              {category === "Live" ? (
                <>
                  <span className="text-red-500 animate-pulse inline-block mr-2">•</span>
                  {category}
                </>
              ) : (
                category
              )}
              {/* Divider between categories */}
              {index < categories.length - 1 && (
                <div className="absolute right-0 top-0 h-8 border-r-2 border-gray-500" />
              )}
            </button>
          ))
        )}
      </div>

      {/* Team Logos */}
      <div className="flex space-x-6 mb-6">
  {loading ? (
    // Loading placeholders for team logos
    <div className="w-16 h-16 bg-gray-300 rounded-full animate-pulse" />
  ) : (
    teamLogos.map((team, index) => (
      <div key={index} className="flex flex-col items-center space-y-2 text-center group">
      <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 rounded-full border-gray-100 overflow-hidden group-hover:scale-110 transition-all duration-300 ease-in-out transform">
        <img
          src={team.logoUrl}
          alt={team.name}
          className="w-full h-full rounded-full object-cover group-hover:opacity-80 transition-opacity duration-300"
        />
      </div>
      <span className="text-[10px] sm:text-[12px] text-gray-200 group-hover:text-white transition-colors duration-300">
        {team.name}
      </span>
    </div>
    
    ))
  )}
</div>


      {/* Team Analytics Section */}
      <div className="mt-8">
  <h2 className="text-2xl font-semibold text-white">Team Analytics</h2>
  <div className="overflow-x-auto no-scrollbar mt-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {loading ? (
        // Loading placeholders for match cards
        <div className="w-60 h-60 bg-gray-300 rounded-lg animate-pulse" />
      ) : (
        matches.map((match, index) => (
          <div
            key={index}
            className="flex flex-col  items-center space-y-6 bg-gray-800 p-6  rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            style={{ width: '100%' }} // Ensure the card takes full width of grid cell
          >
            <div className="flex items-center justify-between w-full ">
              <div className="flex w-[150px] flex-col items-center ">
                <div className="w-24 h-24 border-4 rounded-full border-gray-100 overflow-hidden">
                  <img
                    src={teamLogos.find(team => team.name === match.team1).logoUrl}
                    alt={match.team1}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium text-gray-200">{match.team1}</span>
                <span className="text-lg font-bold text-white">{match.score1}</span>
              </div>
              <div className="text-center text-lg text-white font-bold ">
                <span className="text-xs text-gray-400">VS</span>
              </div>
              <div className="flex w-[150px] flex-col items-center ">
                <div className="w-24 h-24 border-4 rounded-full border-gray-100 overflow-hidden">
                  <img
                    src={teamLogos.find(team => team.name === match.team2).logoUrl}
                    alt={match.team2}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium text-gray-200">{match.team2}</span>
                <span className="text-lg font-bold text-white">{match.score2}</span>
              </div>
            </div>
            <div className="text-xs text-lime-400 mt-2 text-center  ">
              <p className="">Match: {match.team1} vs {match.team2}</p>
              <p className="">Score: {match.score1} - {match.score2}</p>
            </div>
          </div>
        ))
      )}
    </div>
  </div>
</div>

    </div>
  );
};

export default CategorySection;
