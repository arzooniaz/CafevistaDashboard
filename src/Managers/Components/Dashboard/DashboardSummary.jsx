import React from "react";
import elipse1 from "../../Assets/Images/Ellipse 16.png";
import elipse2 from "../../Assets/Images/Ellipse 27.png";
import elipse3 from "../../Assets/Images/Ellipse 28.png";

const DashboardSummary = () => {
  const summaryData = [
    {
      img: elipse1,
      priority: "Low",
      color: "green",
      project: "UI/UX",
      status: ["bg-transparent", "bg-green-600 w-8", "bg-transparent", "bg-transparent"],  },
    {
      img: elipse2,
      priority: "Medium",
      color: "pink",
      project: "UI/UX",
      status: ["bg-transparent", "bg-transparent", "bg-pink-500 w-14", "bg-transparent"],   },
    {
      img: elipse3,
      priority: "High",
      color: "blue",
      project: "UI/UX",
      status: ["bg-blue-600 w-16", "bg-transparent", "bg-transparent", "bg-transparent"],   },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-full">
      <div className="flex justify-between mb-2">
      <div className="flex items-center space-x-4"> {/* Added a flex container with space between */}
      <h2 className="text-lg font-bold">Dashboard</h2>
      <div className="text-sm text-gray-500">July 30-August10</div> {/* Moved date here */}
      </div>
      <p className="text-sm text-gray-500">Wed, 8 August 2024</p>
      </div>
      
      <table className="table-auto w-full text-left text-sm">
        <thead>
          <tr>
            <th className="px-0 py-2 border-b border-gray-500 font-bold">
              <div className="flex items-center text-sm justify-center mt-1 text-black-100">
                <p className="mr-1">Week1</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-4"
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
            </th>
            <th className="px-0 py-2 border-b border-gray-500 font-bold">Priority</th>
            <th className="px-0 py-2 border-b border-gray-500 font-bold">Project</th>
            <th className="px-12 py-2 border-b border-gray-500 font-medium">Aug1</th>
            <th className="px-9 py-2 border-b border-gray-500 font-medium">Aug2</th>
            <th className="px-12 py-2 border-b border-gray-500 font-medium">Aug3</th>
            <th className="px-14 py-2 border-b border-gray-500 font-medium">Aug4</th>
          </tr>
        </thead>
        <tbody>
          {summaryData.map((item, index) => (
            <tr key={index} className="border-b">
              {/* Week1 column with avatars */}
              <td className="px-5 py-2">
                <img src={item.img} alt="" className="w-6 h-6 rounded-full" />
              </td>

              {/* Priority column with colored circles */}
              <td className="px-0 py-2 flex items-center">
                <div className={`w-3 h-3 rounded-full bg-${item.color}-600 mr-2`}></div>
                <span className={`text-${item.color}-500 font-semibold`}>
                  {item.priority}
                </span>
              </td>

              {/* Project column */}
              <td className="px-0 py-2">{item.project}</td>

              {/* Status columns for each day */}
              {item.status.map((color, idx) => (
                <td key={idx} className="px-9 py-3">
                  <div className={`${color} h-2 rounded-lg`}></div> {/* Render the colored bars */}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
    </div>
  );
};

export default DashboardSummary;
