import React from 'react';
import { Line } from 'react-chartjs-2';
import { project2Data } from './Utilities'; 

const ProgressChart2 = () => {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white border-2 border-gray-100 rounded-xl px-6 py-14 h-[22rem]">
      <h2 className="text-lg font-bold text-center mb-4">Progress report of Project 2</h2>
      <Line data={project2Data} options={{
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
        }} height={280}/>
    </div>
  );
};

export default ProgressChart2;
