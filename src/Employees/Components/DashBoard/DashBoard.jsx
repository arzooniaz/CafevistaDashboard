import React from "react";
<<<<<<< HEAD

const DashBoard = () => {
  return <div></div>;
};

export default DashBoard;
=======
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
      <div className="grid md:grid-cols-12 gap-4 mb-4">
        <div className="md:col-span-6">
          <DashboardOverview data={dashboardData} />
        </div>
        <div className="md:col-span-3">
          <TeamMembers />
        </div>
        <div className="md:col-span-3 overflow-auto">
          {" "}
          {/* Added overflow-auto */}
          <Calendar />
        </div>
      </div>

      {/* Summary and Chat section */}
      <div className="grid md:grid-cols-12 gap-4">
        <div className="md:col-span-6">
          <DashboardSummary />
        </div>
        <div className="md:col-span-3">
          <Messages />
        </div>
        <div className="md:col-span-3">
          <Chatt />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
>>>>>>> 171c0f1 (Temporary commit to save changes)
