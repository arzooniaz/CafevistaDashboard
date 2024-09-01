import React from "react";
import DashboardOverview from "./DashboardOverview";
import TeamMembers from "./TeamMembers";
import Calendar from "./Calendar"; // Corrected import
import DashboardSummary from "./DashboardSummary";
const Dashboard = () => {
  const dashboardData = [
    { count: 32, label: "In progress" },
    { count: 51, label: "Completed" },
    { count: 9, label: "Upcoming" },
    { count: 92, label: "Total" },
  ];

  return (
    <section className="Dashboard-page p-2">
      <div className="dasboard-overview sm:grid grid-cols-12 gap-4">
        <div className=" sm:col-span-6">
          <DashboardOverview data={dashboardData} />
        </div>
        <div className=" sm:col-span-3">
          <TeamMembers />
        </div>
        <div className=" sm:col-span-3">
          <Calendar /> {/* Corrected component name */}
        </div>
      </div>
      <div className="dasboard-summary sm:grid grid-cols-12">
        <div className="sm:col-span-6">
          <DashboardSummary />
        </div>
        <div className=" sm:col-span-3">second section</div>
        <div className=" sm:col-span-3">third section</div>
      </div>
    </section>

    // <div className="flex gap-4 p-3">
    //   <div className="flex-grow">
    //     <DashboardOverview data={dashboardData} />
    //   </div>
    //   <div className="flex-none">
    //     <TeamMembers />
    //   </div>
    //   <div className="flex-grid">
    //     <Calendar /> {/* Corrected component name */}
    //   </div>

    // </div>
  );
};

export default Dashboard;
