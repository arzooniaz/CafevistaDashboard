import React from "react";
import elipse1 from "../../Assets/Ellipse 16.png";
import elipse2 from "../../Assets/Ellipse 27.png";
import elipse3 from "../../Assets/Ellipse 28.png";

const DashboardSummary = () => {
  const summaryData = [
    {
      img: elipse1,
      priority: "Low",
      color: "green",
      project: "UI/UX",
      statusColor: "bg-green-500",
    },
    {
      img: elipse2,
      priority: "Medium",
      color: "pink",
      project: "UI/UX",
      statusColor: "bg-pink-500",
    },
    {
      img: elipse3,
      priority: "High",
      color: "blue",
      project: "UI/UX",
      statusColor: "bg-blue-500",
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
            <th className="px-2 py-2 font-medium">Week1</th>
            <th className="px-2 py-2 font-medium">Priority</th>
            <th className="px-2 py-2 font-medium">Project</th>
            <th className="px-2 py-2 font-medium">Aug1</th>
            <th className="px-2 py-2 font-medium">Aug2</th>
            <th className="px-2 py-2 font-medium">Aug3</th>
            <th className="px-2 py-2 font-medium">Aug4</th>
          </tr>
        </thead>
        <tbody>
          {summaryData.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="px-2 py-2">
                <img src={item.img} alt="" className="w-6 h-6 rounded-full" />
              </td>
              <td className="px-2 py-2">
                <span className={`text-${item.color}-500 font-semibold`}>
                  {item.priority}
                </span>
              </td>
              <td className="px-2 py-2">{item.project}</td>
              <td className="px-2 py-2">
                <div className={`${item.statusColor} h-2 rounded`}></div>
              </td>
              <td className="px-2 py-2">
                <div className={`${item.statusColor} h-2 rounded`}></div>
              </td>
              <td className="px-2 py-2">
                <div className={`${item.statusColor} h-2 rounded`}></div>
              </td>
              <td className="px-2 py-2">
                <div className={`${item.statusColor} h-2 rounded`}></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardSummary;
