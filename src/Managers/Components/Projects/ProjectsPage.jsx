import React, { useState } from "react";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  const initialProjects = [
    {
      name: "EcoShop App",
      description: "Sustainable shopping experience",
      manager: "Aurora",
      email: "Aurora@gmail.com",
      teamMembers: ["Ali", "Afshah", "Ayesha"],
      emails: ["Ali@gmail.com", "Afshah@gmail.com", "Ayesha@gmail.com"],
      budget: "20,000",
      status: "Unpaid",
    },
    {
      name: "EcoShop App",
      description: "Sustainable shopping experience",
      manager: "Aurora",
      email: "Aurora@gmail.com",
      teamMembers: ["Ali", "Afshah", "Ayesha"],
      emails: ["Ali@gmail.com", "Afshah@gmail.com", "Ayesha@gmail.com"],
      budget: "10,000",
      status: "Paid",
    },
    {
      name: "EcoShop App",
      description: "Sustainable shopping experience",
      manager: "Aurora",
      email: "Aurora@gmail.com",
      teamMembers: ["Ali", "Afshah", "Ayesha"],
      emails: ["Ali@gmail.com", "Afshah@gmail.com", "Ayesha@gmail.com"],
      budget: "50,000",
      status: "Unpaid",
    },
  ];

  const [projects, setProjects] = useState(initialProjects);
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortOrder, setSortOrder] = useState(null); // "asc" or "desc"

  const handleFilterChange = (e) => {
    const selectedStatus = e.target.value;
    setFilterStatus(selectedStatus);
  };

  const handleSort = (field) => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    const sortedProjects = [...projects].sort((a, b) => {
      if (field === "budget") {
        const budgetA = parseInt(a.budget.replace(",", ""));
        const budgetB = parseInt(b.budget.replace(",", ""));
        return newSortOrder === "asc" ? budgetA - budgetB : budgetB - budgetA;
      } else if (field === "status") {
        return newSortOrder === "asc"
          ? a.status.localeCompare(b.status)
          : b.status.localeCompare(a.status);
      }
      return 0;
    });
    setSortOrder(newSortOrder);
    setProjects(sortedProjects);
  };

  const filteredProjects =
    filterStatus === "All"
      ? projects
      : projects.filter((project) => project.status === filterStatus);

  return (
    <div className="md:p-[20px] lg:p-[20px]">
      {/* Filter Section */}
      <div className="bg-white pt-2 pb-[2px] w-48 p-5 ml-[110px] mt-3 rounded-xl mb-3 md:pt-[10px] md:pr-[10px] md:pb-[10px] md:pl-[20px] md:rounded-[10px] md:mb-[10px] md:w-[28%] md:mx-auto">

        <div className="mb-2 md:mb-[10px]">
          <label className="md:mr-[10px]" htmlFor="status-filter">
            Filter by Status:
          </label>
          <select
            name="choice"
            id="status-filter"
            onChange={handleFilterChange}
          >
            <option value="All" selected>
              All
            </option>
            <option value="Paid">Paid</option>
            <option value="Unpaid">Unpaid</option>
          </select>
        </div>
        {/* Sort Section */}
        <div className="md:mb-[10px]">
          <button
            className="bg-[#f0f0f0] hover:bg-[#ddd] mb-3 rounded-lg p-[6px] md:mr-[10px] md:pt-[5px] md:pb-[5px] md:pr-[10px] md:pl-[10px] md:cursor-pointer md:rounded-[7.5px] md:hover:bg-[#ddd]"
            onClick={() => handleSort("budget")}
          >
            Sort by Budget {sortOrder === "asc" ? "▲" : "▼"}
          </button>
          <button
            className="bg-[#f0f0f0] hover:bg-[#ddd] mb-3 rounded-lg p-[6px] md:mr-[10px] md:pt-[5px] md:pb-[5px] md:pr-[10px] md:pl-[10px] md:cursor-pointer md:rounded-[7.5px] md:hover:bg-[#ddd]"
            onClick={() => handleSort("status")}
          >
            Sort by Status {sortOrder === "asc" ? "▲" : "▼"}
          </button>
        </div>
      </div>

      <div className="table-fix ml-[27px] w-[75%] md:mx-auto md:bg-white md:p-[20px] md:rounded-xl md:w-[89%]">
        <table className="min-w-full table-auto border-collapse md:w-full md:border-collapse">
          <thead className="hidden md:table-header-group">
            <tr>
              <th className="px-4 py-2 text-left md:border-[2.5px] md:border-[#bebebe] md:p-[8px] md:text-center md:font-extrabold md:text-base">
                Project Name
              </th>
              <th className="px-4 py-2 text-left md:border-[2.5px] md:border-[#bebebe] md:p-[8px] md:text-center md:font-extrabold md:text-base">
                Description
              </th>
              <th className="px-4 py-2 text-left md:border-[2.5px] md:border-[#bebebe] md:p-[8px] md:text-center md:font-extrabold md:text-base">
                Manager
              </th>
              <th className="px-4 py-2 text-left md:border-[2.5px] md:border-[#bebebe] md:p-[8px] md:text-center md:font-extrabold md:text-base">
                Email
              </th>
              <th className="px-4 py-2 text-left md:border-[2.5px] md:border-[#bebebe] md:p-[8px] md:text-center md:font-extrabold md:text-base">
                Team Member
              </th>
              <th className="px-4 py-2 text-left md:border-[2.5px] md:border-[#bebebe] md:p-[8px] md:text-center md:font-extrabold md:text-base">
                Budget
              </th>
              <th className="px-4 py-2 text-left md:border-[2.5px] md:border-[#bebebe] md:p-[8px] md:text-center md:font-extrabold md:text-base">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project, index) => (
              <tr
                key={index}
                className="bg-white block md:table-row mb-4 md:mb-0"
              >
                <td
                  className="bg-[#bebebe] block md:table-cell px-4 py-2 border-t border-gray-200 md:border-[2.5px] md:border-[#bebebe] md:p-[8px] md:text-center md:font-semibold"
                  data-label="Project Name"
                >
                  <span className="md:hidden font-bold ">Project Name: </span>
                  {project.name}
                </td>
                <td
                  className="block md:table-cell px-4 py-2 border-t border-gray-200 md:border-[2.5px] md:border-[#bebebe] md:p-[8px] md:text-center md:font-semibold"
                  data-label="Description"
                >
                  <span className="md:hidden font-bold">Description: </span>
                  {project.description}
                </td>
                <td
                  className="block md:table-cell px-4 py-2 border-t border-gray-200 md:border-[2.5px] md:border-[#bebebe] md:p-[8px] md:text-center md:font-semibold"
                  data-label="Manager"
                >
                  <span className="md:hidden font-bold">Manager: </span>
                  {project.manager}
                </td>
                <td
                  className="block md:table-cell px-4 py-2 border-t border-gray-200 md:border-[2.5px] md:border-[#bebebe] md:p-[8px] md:text-center md:font-semibold"
                  data-label="Email"
                >
                  <span className="md:hidden font-bold">Email: </span>
                  {project.email}
                </td>
                <td
                  className="block md:table-cell px-4 py-2 border-t border-gray-200 md:border-[2.5px] md:border-[#bebebe] md:p-[8px] md:text-center md:font-semibold"
                  data-label="Team Member"
                >
                  <span className="md:hidden font-bold">Team Member: </span>
                  {project.teamMembers.map((member, i) => (
                    <div key={i}>
                      {member} ({project.emails[i]})
                    </div>
                  ))}
                </td>
                <td
                  className="block md:table-cell px-4 py-2 border-t border-gray-200 md:border-[2.5px] md:border-[#bebebe] md:p-[8px] md:text-center md:font-semibold"
                  data-label="Budget"
                >
                  <span className="md:hidden font-bold">Budget: </span>
                  {project.budget}
                </td>
                <td
                  className="block md:table-cell px-4 py-2 border-t border-gray-200 md:border-[2.5px] md:border-[#bebebe] md:p-[8px] md:text-center md:font-semibold"
                  data-label="Status"
                >
                  <span className="md:hidden font-bold">Status: </span>
                  <span
                    className={`status ${project.status.toLowerCase()} px-2 py-1 rounded-lg md:px-[13px] md:py-[5px] md:rounded-[30px] md:font-semibold`}
                  >
                    {project.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsPage;
