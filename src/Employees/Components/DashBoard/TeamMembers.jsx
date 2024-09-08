import React from "react";
import { FaRegStickyNote, FaComments } from "react-icons/fa";
import { BsChatRight } from "react-icons/bs";
import { IoClipboardOutline } from "react-icons/io5";
import elipse1 from "../../Assets/Images/Ellipse 16.png";
import elipse3 from "../../Assets/Images/Ellipse 27.png";
import elipse4 from "../../Assets/Images/Ellipse 28.png";
import elipse5 from "../../Assets/Images/Ellipse 4.png";

const teamMembers = [
  { name: "Elizbeth", role: "UI designer", img: elipse3 },
  { name: "Aurora", role: "UI designer", img: elipse1 },
  { name: "Olivia", role: "Developer", img: elipse5 },
  { name: "John", role: "Developer", img: elipse4 },
];

const TeamMembers = () => {
  return (
    <div className="px-3 py-3 w-full md:max-w-md mx-auto bg-white rounded-lg shadow-md">
      {" "}
      {/* Reduced padding and adjusted width */}
      <div className="flex justify-between items-center mb-3">
        {" "}
        {/* Reduced margin */}
        <h2 className="text-base font-semibold">Team members</h2>{" "}
        {/* Reduced font size */}
        <div className="flex items-center text-sm justify-center mt-1 text-black-100">
          <p className="mr-1">View all</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      <div className="grid gap-4">
        {" "}
        {/* Reduced gap */}
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`flex items-center ${
              index < teamMembers.length - 1
                ? "border-b border-gray-400 pb-1 mb-1"
                : ""
            }`}
          >
            {" "}
            {/* Reduced padding and margin */}
            <img
              src={member.img}
              alt={`${member.name}`}
              className="w-8 h-8 rounded-full mr-3"
            />
            <div className="flex-grow text-left">
              <p className=" text-sm  font-medium">{member.name}</p>{" "}
              {/* Reduced font size */}
              <p className="text-xs text-gray-500">{member.role}</p>{" "}
              {/* Reduced font size */}
            </div>
            <div className="ml-3 flex space-x-2">
              {" "}
              {/* Reduced margin */}
              <button className="p-1 rounded-full hover:bg-gray-200">
                <IoClipboardOutline className="w-4 h-4" />{" "}
                {/* Reduced icon size */}
              </button>
              <button className="p-1 rounded-full hover:bg-gray-200">
                <BsChatRight className="w-4 h-4" /> {/* Reduced icon size */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
