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
      status: ["bg-transparent", "bg-green-600", "bg-transparent", "bg-transparent"],
    },
    {
      img: elipse2,
      priority: "Medium",
      color: "pink",
      project: "UI/UX",
      status: ["bg-transparent", "bg-transparent", "bg-pink-500", "bg-transparent"],
    },
    {
      img: elipse3,
      priority: "High",
      color: "blue",
      project: "UI/UX",
      status: ["bg-blue-600", "bg-transparent", "bg-transparent", "bg-transparent"],
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full overflow-x-auto">
      <div className="flex justify-between mb-2">
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-bold">Dashboard</h2>
          <div className="text-sm text-gray-500">July 30-August 10</div>
        </div>
        <p className="text-sm text-gray-500">Wed, 8 August 2024</p>
      </div>
      
      <table className="table-auto w-full text-left text-sm">
        <thead>
          <tr>
            <th className="px-1 py-2 border-b border-gray-500 font-bold">Week1</th>
            <th className="px-1 py-2 border-b border-gray-500 font-bold">Priority</th>
            <th className="px-1 py-2 border-b border-gray-500 font-bold">Project</th>
            <th className="px-4 py-2 border-b border-gray-500 font-medium">Aug1</th>
            <th className="px-4 py-2 border-b border-gray-500 font-medium">Aug2</th>
            <th className="px-4 py-2 border-b border-gray-500 font-medium">Aug3</th>
            <th className="px-4 py-2 border-b border-gray-500 font-medium">Aug4</th>
          </tr>
        </thead>
        <tbody>
          {summaryData.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="px-5 py-2">
                <img src={item.img} alt="" className="w-6 h-6 rounded-full" />
              </td>
              <td className="px-1 py-2 flex items-center">
                {/* Manually construct the class names for color */}
                <div className={`w-3 h-3 rounded-full ${item.color === "green" ? "bg-green-600" : item.color === "pink" ? "bg-pink-500" : "bg-blue-600"} mr-2`}></div>
                <span className={`${item.color === "green" ? "text-black" : item.color === "pink" ? "text-black" : "text-black"} font-semibold`}>
                  {item.priority}
                </span>
              </td>
              <td className="px-1 py-2">{item.project}</td>
              {item.status.map((status, index) => (
                <td key={index} className="py-2">
                  {/* Adjust the size of the status bars */}
                  <div className={`w-14 h-3 rounded-sm ${status}`}></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardSummary;
