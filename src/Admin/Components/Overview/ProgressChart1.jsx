import React from 'react';
import { Bar } from 'react-chartjs-2';
import { project1Data } from './Utilities'; 

const ProgressChart1 = () => {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white border-2 border-gray-100 rounded-xl px-6 py-14 h-[22rem]">
      <h2 className="text-lg font-bold text-center mb-4">Project 1 Progress</h2>
      <Bar data={project1Data} options={{
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            y: {
              min: 1, 
              max: 5, 
              ticks: {
                stepSize: 1, 
                callback: function(value) {
                  return `Task${value}`; 
                },
              },
            },
          },
        }}  height={280}/>
    </div>
  );
};

export default ProgressChart1;
