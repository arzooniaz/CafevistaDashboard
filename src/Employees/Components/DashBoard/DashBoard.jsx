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
    <section className="Dashboard-page p-4">
      {/* Overview section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
        <div className="md:col-span-6">
          <DashboardOverview data={dashboardData} />
        </div>
        <div className="md:col-span-3">
          <TeamMembers />
        </div>
<<<<<<< HEAD
        <div className=" sm:col-span-3">
          <Calendar />
=======
        <div className="md:col-span-3 overflow-auto"> {/* Added overflow-auto */}
          <Calendar /> 
>>>>>>> arslan
        </div>
      </div>

      {/* Summary and Chat section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-6">
          <DashboardSummary />
        </div>
<<<<<<< HEAD
        <div className=" sm:col-span-3">
          <Messages />
        </div>
        <div className=" sm:col-span-3">
          <Chatt />
=======
        <div className="md:col-span-3">
          <Messages/>
        </div>
        <div className="md:col-span-3">
          <Chatt/>
>>>>>>> arslan
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

