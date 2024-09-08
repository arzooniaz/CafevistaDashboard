import React from "react";
import DashboardOverview from "./DashboardOverview";
import DashboardSummary from "./DashboardSummary";

const Dashboard = () => {
  const dashboardData = [
    { count: 32, label: "In progress" },
    { count: 51, label: "Completed" },
    { count: 9, label: "Upcoming" },
    { count: 92, label: "Total" },
  ];

  return (
    <section className="Dashboard-page p-4">
    {/* Overview section */}
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
      <div className="col-span-11"> {/* Full width for all screen sizes */}
        <DashboardOverview data={dashboardData} />
      </div>
    </div>
  
    {/* Summary and Chat section */}
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="col-span-11 "> {/* Full width on mobile, 6 columns on large screens */}
        <DashboardSummary />
      </div>
   
    </div>
  </section>
  
  );
};

export default Dashboard;
