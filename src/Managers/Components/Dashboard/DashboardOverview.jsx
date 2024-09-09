import React from "react";
import { FaBars } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { RxPerson } from "react-icons/rx";
import elipse4 from "../../Assets/Images/Ellipse 28.png";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

const summaryData = [
  { count: 32, label: "In progress" },
  { count: 51, label: "Completed" },
  { count: 9, label: "Upcoming" },
  { count: 92, label: "Total" },
];

const taskData = [
  {
    title: "Interview Client",
    date: "9 August 2024",
    timeLeft: "Today",
    avatar: elipse4,
    section: "To Do",
  },
  {
    title: "Designs",
    date: "12 August 2024",
    timeLeft: "3 Days",
    avatar: elipse4,
    section: "Upcoming",
  },
  {
    title: "Style Guide",
    date: "12 August 2024",
    timeLeft: "3 Days",
    avatar: elipse4,
    section: "Upcoming",
  },
];

const DashboardOverview = () => {
  return (
    <div className="w-full max-w-full px-4 py-3 bg-white shadow rounded-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4 border-b border-gray-500 pb-2">
        <h2 className="text-xl sm:text-2xl font-bold">Dashboard</h2>
        <div className="flex items-center">
          <p className="text-sm sm:text-base text-gray-500 mr-2">August 2024</p>
          <CiHome className="text-gray-500 hover:text-black ml-2 cursor-pointer" />
          <FaBars className="text-gray-400 hover:text-black ml-2 cursor-pointer" />
        </div>
      </div>

      {/* Summary Section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-1">
        {summaryData.map((item, index) => (
          <div key={index} className="text-center">
            <p className="text-xl sm:text-2xl font-bold">{item.count}</p>
            <p className="text-sm sm:text-base text-gray-500">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Task Cards Section */}
      <div className="border-t border-gray-500 pt-2 overflow-x-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {taskData.map((task, index) => (
            <div key={index} className="mb-4 w-full sm:max-w-full">
              {/* Task Section Label */}
              <p className="text-sm text-center font-medium mb-1">
                {task.section}
              </p>
              {/* Task Card */}
              <div className="w-full p-2 border border-gray-300 bg-gray-0 rounded-lg shadow-md">
                <h3 className="text-base sm:text-lg mb-1 font-bold">{task.title}</h3>
                <div className="flex items-center mb-2 text-xs text-gray-500">
                  <FaCalendarAlt className="mr-1 text-gray-400" />
                  <p>{task.date}</p>
                </div>
                <div className="flex items-center text-xs text-gray-500 border-b border-gray-300 mb-2 pb-1">
                  <FaClock className="mr-1 text-gray-400" />
                  <p>{task.timeLeft}</p>
                </div>
                <div className="flex items-center ml-5 mt-2">
                  <RxPerson className="mr-3" />
                  <img
                    src={task.avatar}
                    alt="Avatar"
                    className="w-6 h-6 rounded-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
