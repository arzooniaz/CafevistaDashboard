import React from "react";

const ProjectHistory = () => {
  // Example project data array
  const projects = [
    {
      name: "UI/UX",
      status: "Completed",
      manager: "Olivia",
      progress: 100,
      paymentStatus: "Paid",
    },
    {
      name: "UI/UX",
      status: "In progress",
      manager: "Olivia",
      progress: 60,
      paymentStatus: "In progress",
    },
    {
      name: "UI/UX",
      status: "In progress",
      manager: "Olivia",
      progress: 30,
      paymentStatus: "In progress",
    },
    {
      name: "UI/UX",
      status: "Completed",
      manager: "Olivia",
      progress: 100,
      paymentStatus: "Paid",
    },
    {
      name: "UI/UX",
      status: "Cancelled",
      manager: "Aurora",
      progress: 0,
      paymentStatus: "Budget out",
    },
  ];

  return (
    <div className="p-4">
      {/* Save Button with Arrow */}
      <button 
        style={{
          padding: '10px 20px',
          backgroundColor:'#dbdada',  // Button background color
          borderRadius: '8px',         // Curved edges
          cursor: 'pointer',
          fontWeight: 'bold',          // Bold text
          display: 'flex',             // Flex to align text and arrow
          alignItems: 'center',        // Center align
          gap: '8px',                  // Space between text and arrow
          outline: 'none'              // Remove button outline
        }}
        onClick={() => alert("Save functionality coming soon!")} // Sample action
      >
        &#8592; {/* Unicode for left arrow */}
        History
      </button>

      <div className="bg-gray-50 p-4 rounded-md shadow-md mt-6 mr-14">
        <h2 className="text-lg font-semibold mb-4">Project History</h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-semibold">Project Name</th>
              <th className="px-4 py-2 text-left text-semibold">Status</th>
              <th className="px-4 py-2 text-left text-semibold">Manager</th>
              <th className="px-4 py-2 text-left text-semibold">Progress</th>
              <th className="px-4 py-2 text-left text-semibold">Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index} className="border-t border-gray-500">
                <td className="px-4 py-4">{project.name}</td>
                <td className="px-4 py-4">{project.status}</td>
                <td className="px-4 py-4">{project.manager}</td>
                <td className="px-4 py-4">
                  <div className="w-full bg-gray-200 rounded-full h-5">
                    <div
                      className={`h-5 rounded-full ${
                        project.progress === 100 ? "bg-blue-500" : "bg-blue-300"
                      }`}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </td>
                <td className="px-4 py-2">{project.paymentStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectHistory;
