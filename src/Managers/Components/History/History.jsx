import React from "react";

const ProjectsHistory = () => {
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
    <div className="p-4 w-full">
      <div className="bg-gray-50 p-4 rounded-md shadow-md mt-6">
        <h2 className="text-lg font-semibold mb-4">Project History</h2>
        {/* Horizontal scrolling container for the table */}
        <div className="grid sm:grid-cols-12">
          <div className="overflow-x-auto sm:col-span-12">
            <table className="min-w-full border-none outline-none table-auto text-sm lg:text-base">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">
                    Project Name
                  </th>
                  <th className="px-4 py-2 text-left font-semibold">Status</th>
                  <th className="px-4 py-2 text-left font-semibold">Manager</th>
                  <th className="px-4 py-2 text-left font-semibold">
                    Progress
                  </th>
                  <th className="px-4 py-2 text-left font-semibold">
                    Payment Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={index} className="border-t border-gray-300">
                    <td className="px-4 py-4 whitespace-nowrap">
                      {project.name}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      {project.status}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      {project.manager}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                          className={`h-4 rounded-full ${
                            project.progress === 100
                              ? "bg-blue-500"
                              : "bg-blue-300"
                          }`}
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      {project.paymentStatus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHistory;
