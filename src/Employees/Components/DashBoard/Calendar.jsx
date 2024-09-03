import React, { useState } from 'react';

const dateRanges = [
  'This Week', 'Last 7 days', 'This month', 'Last 30 days', 'Last month', 'Custom'
];

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState('AUGUST 2024');

  const handlePrevMonth = () => {
    console.log('Previous month');
  };

  const handleNextMonth = () => {
    console.log('Next month');
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-4 text-xs"> {/* Restored max-width, reduced padding */}
      <div className="grid grid-cols-3 gap-1 mb-2"> {/* Reduced grid gap and margin bottom */}
        {dateRanges.map((range, index) => (
          <button key={index} className="border border-gray-300 rounded py-1 px-1 text-xs"> {/* Reduced padding and font size */}
            {range}
          </button>
        ))}
      </div>
      <div className="flex justify-between items-center mb-1"> {/* Reduced margin bottom */}
        <button onClick={handlePrevMonth} className="text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"> {/* Reduced icon size */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <span className="font-bold text-sm">{currentMonth}</span> {/* Reduced font size */}
        <button onClick={handleNextMonth} className="text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"> {/* Reduced icon size */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center font-bold mb-1"> {/* Reduced margin bottom */}
        {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center font-bold">
        {Array.from({ length: 31 }, (_, i) => (
          <div key={i} className={`py-1 rounded text-xs ${i === 7 ? 'bg-gray-300' : ''}`}> {/* Reduced font size */}
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
