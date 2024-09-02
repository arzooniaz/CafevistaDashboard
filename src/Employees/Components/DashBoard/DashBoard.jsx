import React from 'react';
import DashboardOverview from './DashboardOverview';
import TeamMembers from './TeamMembers'; 
import Calendar from './Calendar'; // Corrected import

const Dashboard = () => {
  const dashboardData = [
    { count: 32, label: 'In progress' },
    { count: 51, label: 'Completed' },
    { count: 9, label: 'Upcoming' },
    { count: 92, label: 'Total' },
  ];

  return (
    <div className="flex gap-4 p-3">
      <div className="flex-grow"> 
        <DashboardOverview data={dashboardData} />
      </div>
      <div className="flex-none"> 
        <TeamMembers /> 
      </div>
      <div className="flex-grid"> 
        <Calendar /> {/* Corrected component name */}
      </div>

    </div>
  );
};

export default Dashboard;
