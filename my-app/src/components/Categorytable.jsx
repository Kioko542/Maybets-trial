import React from "react";
import CardsWithGraph from "../components/Graph";
import { FaEllipsisH, FaEllipsisV } from 'react-icons/fa';

const MayBetsCategoriesAndTable = () => {
  const categories = [
    "Home",
    "Live Football",
    "eFootball",
    "Basketball",
    "Soccer",
    "Aviator",
    "Virtuals",
    "Casino",
    "Jackpot",
    "Spin2Win",
    "More",
  ];

  const bettingData = [
    {
      id: 1,
      match: "Aston Villa vs West Ham United",
      date: "26/01",
      time: "19:30",
      markets: 188,
      odds: "1.51, 4.90",
      teams: [
        { name: "Aston Villa", logo: "https://i.pinimg.com/736x/3d/a4/a9/3da4a986c3167d0b7e66be0c8d09ee8b.jpg" },
        { name: "West Ham United", logo: "https://i.pinimg.com/736x/a7/4f/70/a74f70cb052c18060af20f88244d8c70.jpg" },
      ],
    },
    {
      id: 2,
      match: "Fulham FC vs Manchester United",
      date: "26/01",
      time: "22:00",
      markets: 187,
      odds: "2.05, 3.30",
      teams: [
        { name: "Fulham FC", logo: "https://i.pinimg.com/736x/0e/4a/98/0e4a9859dab4967a5ed6edf108aff4ff.jpg "},
        { name: "Manchester United", logo: "https://i.pinimg.com/736x/9d/78/ab/9d78ab7b4e67f88e6c9c9269ef27ff30.jpg" },
      ],
    },
    {
      id: 3,
      match: "Real Sociedad vs Getafe CF",
      date: "26/01",
      time: "20:00",
      markets: 153,
      odds: "1.51, 4.90",
      teams: [
        { name: "Real Sociedad", logo: "https://i.pinimg.com/736x/3d/34/1d/3d341d3264cbb350d1fcd69b13e65c9d.jpg" },
        { name: "Getafe CF", logo: "https://i.pinimg.com/736x/40/37/d5/4037d58580050ba79867bff97b14fb25.jpg" },
      ],
    },
    // Adding more data for demonstration
    {
      id: 4,
      match: "Paris Saint-Germain vs Lyon",
      date: "26/01",
      time: "21:00",
      markets: 210,
      odds: "1.35, 5.10",
      teams: [
        { name: "Paris Saint-Germain", logo: "https://i.pinimg.com/736x/26/0a/a7/260aa7500d3f14d08e06b07479676fe1.jpg" },
        { name: "Lyon", logo: "https://i.pinimg.com/736x/f8/94/5a/f8945a3069e89d2677b5eb0f0db4c0a0.jpg" },
      ],
    },
    {
      id: 5,
      match: "Real Madrid vs Sevilla FC",
      date: "26/01",
      time: "22:30",
      markets: 196,
      odds: "1.62, 4.50",
      teams: [
        { name: "Real Madrid", logo: "https://i.pinimg.com/736x/ba/62/fb/ba62fbd06c21f6d2c02a7e21d25815fa.jpg" },
        { name: "Sevilla FC", logo: "https://i.pinimg.com/736x/62/6e/7f/626e7f849a156903af01b985ccbc7039.jpg" },
      ],
    },
  ];

  const countryData = [
    { country: "England", markets: 403, continent: "Europe", population: "56M", region: "UK" },
    { country: "Spain", markets: 641, continent: "Europe", population: "47M", region: "EU" },
    { country: "Germany", markets: 288, continent: "Europe", population: "83M", region: "EU" },
    { country: "Brazil", markets: 1033, continent: "South America", population: "213M", region: "Brazilian" },
    { country: "Italy", markets: 700, continent: "Europe", population: "60M", region: "EU" },
    { country: "France", markets: 295, continent: "Europe", population: "67M", region: "EU" },
    { country: "Argentina", markets: 213, continent: "South America", population: "45M", region: "LATAM" },
    { country: "USA", markets: 144, continent: "North America", population: "331M", region: "NA" },
    { country: "Portugal", markets: 336, continent: "Europe", population: "10M", region: "EU" },
    { country: "Turkey", markets: 305, continent: "Asia", population: "82M", region: "MENA" },
    { country: "Mexico", markets: 410, continent: "North America", population: "126M", region: "LATAM" },
    { country: "Netherlands", markets: 315, continent: "Europe", population: "17M", region: "EU" },
    { country: "Belgium", markets: 490, continent: "Europe", population: "11M", region: "EU" },
    { country: "Japan", markets: 525, continent: "Asia", population: "125M", region: "APAC" },
    { country: "Australia", markets: 515, continent: "Oceania", population: "26M", region: "Oceania" },
    { country: "Russia", markets: 480, continent: "Europe", population: "144M", region: "Eurasian" },
    { country: "China", markets: 500, continent: "Asia", population: "1.4B", region: "APAC" },
    { country: "India", markets: 505, continent: "Asia", population: "1.4B", region: "APAC" },
    { country: "South Africa", markets: 390, continent: "Africa", population: "60M", region: "Sub-Saharan Africa" },
    { country: "Sweden", markets: 350, continent: "Europe", population: "10M", region: "EU" },
    { country: "Poland", markets: 315, continent: "Europe", population: "38M", region: "EU" },
  ];
  

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      {/* Categories */}
      <nav
        className="flex items-center  py-3 mb-6 rounded-lg"
        style={{
          overflowX: "auto",
          whiteSpace: "nowrap",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // Internet Explorer
        }}
      >

<ul className="flex space-x-6" style={{ listStyle: "none", margin: 0, padding: 0 }}>
  {categories.map((category, index) => (
    <li
      key={index}
      className="text-gray-100 font-thin  cursor-pointer"
      style={{ display: "inline-block" }}
    >
      {category === 'More' ? (
        <FaEllipsisV className="mt-1" title="More options" />
      ) : (
        category
      )}
    </li>
  ))}
</ul>

      </nav>

      {/* Sports Betting Data Section */}
      <section className=" shadow-md rounded-lg  mb-8">
        <h2 className="text-2xl font-semibold text-gray-100 mb-4">Today's Betting Markets</h2>

        {/* Country Data Table */}
        <div className="flex flex-wrap mb-6">
  {/* Table Section with Scroll */}
  <div
    className="overflow-x-auto mb-6 flex-1 max-w-full pr-4"
    style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
  >
    <h3 className="text-[12px] font-thin text-orange-400 mb-3 underline">Markets by Country</h3>
    <div
      className="relative max-h-[380px] rounded-lg bg-slate-200 overflow-auto"
      style={{ overflowX: "scroll", scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
   <table className="min-w-full text-left text-gray-700">
  <thead className="bg-gray-200 sticky top-0 z-10">
    <tr>
      <th className="py-3 px-4">Country</th>
      <th className="py-3 px-4">Markets</th>
      <th className="py-3 px-4">Continent</th>
      <th className="py-3 px-4">Population</th>
      <th className="py-3 px-4">Region</th>
    </tr>
  </thead>
  <tbody>
    {countryData.map((row) => (
      <tr key={row.country} className="hover:bg-gray-100">
        <td className="py-3 px-4">{row.country}</td>
        <td className="py-3 px-4">{row.markets}</td>
        <td className="py-3 px-4">{row.continent}</td>
        <td className="py-3 px-4">{row.population}</td>
        <td className="py-3 px-4">{row.region}</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  </div>

  {/* Cards Section */}
<CardsWithGraph/>
</div>


      </section>

      {/* Matches Cards */}
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Featured Matches</h3>
      <div
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-x-auto"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    overflowX: "auto",
    scrollbarWidth: "none", // Firefox
    msOverflowStyle: "none", // Internet Explorer
  }}
>
  {bettingData.map((match) => (
    <div
      key={match.id}
      className="bg-gray-800 shadow-md rounded-lg p-4 flex flex-col"
    >
      <h4 className="text-lg font-semibold text-gray-100 mb-3">{match.match}</h4>
      <div className="flex space-x-4 gap-2 mb-4">
        {match.teams.map((team, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={team.logo} alt={team.name} className="w-10 h-10 rounded-full" />
            <span className="text-gray-200 text-sm">{team.name}</span>
          </div>
        ))}
      </div>
      <div className="text-sm text-gray-300">
        <p><strong>Date:</strong> {match.date}</p>
        <p><strong>Time:</strong> {match.time}</p>
        <p><strong>Markets:</strong> {match.markets}</p>
        <p><strong>Odds:</strong> {match.odds}</p>
      </div>
    </div>
  ))}
</div>


    </div>
  );
};

export default MayBetsCategoriesAndTable;
