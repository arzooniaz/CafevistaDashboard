import React from "react";
import DashboardOverview from "./DashboardOverview";
import TeamMembers from "./TeamMembers";
import Calendar from "./Calendar"; 
import DashboardSummary from "./DashboardSummary";
import Messages from "./Messages";
import Chatt from "./Chatt";


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
          <Calendar /> 
        </div>
      </div>
      <div className="dasboard-summary p-2 sm:grid grid-cols-12 gap-4">
        <div className="sm:col-span-6">
          <DashboardSummary />
        </div>
        <div className=" sm:col-span-3">
          <Messages/>
        </div>
        <div className=" sm:col-span-3">
          <Chatt/>
        </div>
      </div>
    </section>

  );
};

export default Dashboard;
