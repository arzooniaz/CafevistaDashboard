import React, { useState } from "react";

const dateRanges = [
  "This Week",
  "Last 7 days",
  "This month",
  "Last 30 days",
  "Last month",
  "Custom",
];

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState("AUGUST 2024");

  const handlePrevMonth = () => {
    console.log("Previous month");
  };

  const handleNextMonth = () => {
    console.log("Next month");
  };

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="w-full md:max-w-lg mx-auto bg-white rounded-lg shadow-md p-2 text-xs h-full overflow-y-auto">
        {/* Adjust padding and ensure content fits */}
        <div className="grid grid-cols-3 gap-1 mb-2">
          {dateRanges.map((range, index) => (
            <button
              key={index}
              className="border border-gray-300 rounded py-1 px-1 text-xs"
            >
              {range}
            </button>
          ))}
        </div>
        <div className="flex justify-between items-center mb-1">
          <button
            onClick={handlePrevMonth}
            className="flex items-center justify-center w-6 h-6 border border-black rounded-full text-gray-500 hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <span className="font-bold text-sm">{currentMonth}</span>

          <button
            onClick={handleNextMonth}
            className="flex items-center justify-center w-6 h-6 border border-black rounded-full text-gray-500 hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center font-bold mb-1">
          {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(
            (day, index) => (
              <div key={index}>{day}</div>
            )
          )}
        </div>
        <div className="grid grid-cols-7 gap-1 text-center font-bold">
          {Array.from({ length: 31 }, (_, i) => (
            <div
              key={i}
              className={`py-1 rounded text-xs ${i === 7 ? "bg-gray-300" : ""}`}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
