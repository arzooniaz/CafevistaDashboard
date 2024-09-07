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
    <div className="projects-page">
      {/* Filter Section */}
      <div className="Project-header">
        <div className="filter-section">
          <label htmlFor="status-filter">Filter by Status:</label>
          <select
            name="choice"
            autofocus="autofocus"
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
        <div className="sort-section">
          <button onClick={() => handleSort("budget")}>
            Sort by Budget {sortOrder === "asc" ? "▲" : "▼"}
          </button>
          <button onClick={() => handleSort("status")}>
            Sort by Status {sortOrder === "asc" ? "▲" : "▼"}
          </button>
        </div>
      </div>

      <div className="Project-table">
        <table>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Description</th>
              <th>Manager</th>
              <th>Email</th>
              <th>Team Member</th>
              <th>Budget</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project, index) => (
              <tr key={index}>
                <td data-label="Project Name">{project.name}</td>
                <td data-label="Description">{project.description}</td>
                <td data-label="Manager">{project.manager}</td>
                <td data-label="Email">{project.email}</td>
                <td data-label="Team Member">
                  {project.teamMembers.map((member, i) => (
                    <div key={i}>
                      {member} ({project.emails[i]})
                    </div>
                  ))}
                </td>
                <td data-label="Budget">{project.budget}</td>
                <td data-label="Status">
                  <span className={`status ${project.status.toLowerCase()}`}>
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
