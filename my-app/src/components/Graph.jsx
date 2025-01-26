import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { FiDollarSign } from 'react-icons/fi';
import { FaChartLine } from 'react-icons/fa';

// Register necessary chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BetAnalytics = () => {
  const [isVisible, setIsVisible] = useState(false); // State for visibility toggle
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(0); // State for selected month

  // Random function to simulate betting data
  const generateMonthlyData = () => {
    const betsPlaced = [];
    const betsWon = [];
    for (let i = 0; i < 12; i++) {
      betsPlaced.push(Math.floor(Math.random() * (500 - 100) + 100)); // Simulating between 100 and 500 bets placed
      betsWon.push(Math.floor(Math.random() * (300 - 50) + 50)); // Simulating between 50 and 300 bets won
    }
    return { betsPlaced, betsWon };
  };

  // Monthly data (generated dynamically)
  const { betsPlaced, betsWon } = generateMonthlyData();

  // Chart data
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Bets Placed',
        data: betsPlaced.slice(0, selectedMonthIndex + 1), // Show data for selected month and previous months
        backgroundColor: '#000',
        borderColor: '#000',
        borderWidth: 2,
      },
      {
        label: 'Bets Won',
        data: betsWon.slice(0, selectedMonthIndex + 1), // Show data for selected month and previous months
        backgroundColor: '#4CAF50',
        borderColor: '#4CAF50',
        borderWidth: 2,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        grid: {
          color: '#333',
        },
        ticks: {
          color: '#000',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#000',
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.raw} bets`;
          },
        },
      },
    },
  };

  // Handle month change
  const handleMonthChange = (e) => {
    setSelectedMonthIndex(e.target.value);
  };

  return (
    <div className="shadow-lg w-[500px] rounded-lg px-4 py-3 bg-slate-200 z-50 text-gray-800">
      <div className="flex items-center space-x-3">
        <div className="p-3 rounded-full bg-gray-900">
        </div>

        <div className="py-5">
          <h3 className="text-xl font-semibold text-black">Betting Analytics</h3>
          <p className="mt-2 text-sm font-light text-black">
            {betsPlaced[selectedMonthIndex]} Total Bets Placed in {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][selectedMonthIndex]}
          </p>
        </div>
      </div>

      {/* Month Dropdown */}
      <div className="mt-4 flex items-center space-x-2">
        <span className="text-sm text-black font-medium">Select Month:</span>
        <select
          onChange={handleMonthChange}
          value={selectedMonthIndex}
          className="bg-[#FF8C00] text-black px-4 py-2 rounded-md focus:outline-none text-[10px]"
        >
          {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
            <option key={month} value={index} className="text-[10px]">
              {month}
            </option>
          ))}
        </select>
      </div>

      {/* Visibility Switch */}
      <div className="flex items-center justify-between mt-6">
        <span className="text-gray-700 text-sm font-medium">Show Data</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isVisible}
            onChange={() => setIsVisible(!isVisible)} // Toggle visibility on change
            className="sr-only"
          />
          <span className="w-11 h-6 bg-[#FF8C00] rounded-full"></span>
          <span
            className={`w-5 h-5 absolute left-0 top-0.5 transform ${
              isVisible ? 'bg-slate-900 translate-x-5' : 'bg-gray-900'
            } rounded-full transition-all duration-300`}
          ></span>
        </label>
      </div>

      {/* Bar Chart */}
      {isVisible && (
        <div className="mt-6 text-[10px]">
          <Bar data={chartData} options={chartOptions} />
        </div>
      )}

      {/* Footer */}
      <div className="flex flex-col gap-2 text-xs mt-4">
        <div className="flex gap-2 font-medium text-lime-800 leading-none">
          <FaChartLine className="h-4 w-4" /> Trending up by {Math.random().toFixed(2) * 10}% this month
        </div>
        <div className="text-[12px] text-gray-900">
          Showing data for the selected month
        </div>
      </div>
    </div>
  );
};

export default BetAnalytics;
