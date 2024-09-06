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
      status: ["bg-transparent", "bg-green-500", "bg-transparent", "bg-transparent"], // Color on Aug2
    },
    {
      img: elipse2,
      priority: "Medium",
      color: "pink",
      project: "UI/UX",
      status: ["bg-transparent", "bg-transparent", "bg-pink-500", "bg-transparent"], // Color on Aug3
    },
    {
      img: elipse3,
      priority: "High",
      color: "blue",
      project: "UI/UX",
      status: ["bg-transparent", "bg-transparent", "bg-transparent", "bg-blue-500"], // Color on Aug4
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-full">
      <div className="flex justify-between mb-2">
        <h2 className="text-lg font-bold">Dashboard</h2>
        <p className="text-sm text-gray-500">Wed, 8 August 2024</p>
      </div>
      <div className="text-sm text-gray-500 mb-2">July 30-August 10</div>
      <table className="table-auto w-full text-left text-sm">
        <thead>
          <tr>
            <th className="px-2 py-2 border-b border-gray-500 font-bold"><div className="flex items-center text-sm justify-center mt-1 text-black-100">
        <p className="mr-1">Week1</p>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div></th>
            <th className="px-2 py-2 border-b border-gray-500 font-bold">Priority</th>
            <th className="px-2 py-2 border-b border-gray-500 font-bold">Project</th>
            <th className="px-2 py-2 border-b border-gray-500 font-medium">Aug1</th>
            <th className="px-2 py-2 border-b border-gray-500 font-medium">Aug2</th>
            <th className="px-2 py-2 border-b border-gray-500 font-medium">Aug3</th>
            <th className="px-2 py-2 border-b border-gray-500 font-medium">Aug4</th>
          </tr>
        </thead>
        <tbody>
          {summaryData.map((item, index) => (
            <tr key={index} className="border-b">
              {/* Week1 column with avatars */}
              <td className="px-2 py-2">
                <img src={item.img} alt="" className="w-6 h-6 rounded-full" />
              </td>

              {/* Priority column with colored circles */}
              <td className="px-2 py-2 flex items-center">
                <div className={`w-3 h-3 rounded-full bg-${item.color}-500 mr-2`}></div>
                <span className={`text-${item.color}-500 font-semibold`}>
                  {item.priority}
                </span>
              </td>

              {/* Project column */}
              <td className="px-2 py-2">{item.project}</td>

              {/* Status columns for each day */}
              {item.status.map((color, idx) => (
                <td key={idx} className="px-2 py-2">
                  <div className={`${color} h-2 rounded`}></div>
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
