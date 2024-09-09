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
    <section className="Dashboard-page p-4 sm:p-6 max-w-full">
      {/* Overview section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
        <div className="col-span-12 md:col-span-11">
          <DashboardOverview data={dashboardData} />
        </div>
      </div>

      {/* Summary section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-11">
          <DashboardSummary />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
