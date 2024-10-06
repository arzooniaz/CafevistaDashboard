import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ data }) => {
  return (
    <div className="bg-white border-2 border-gray-100 rounded-xl px-6 py-14 h-[22rem]">
      <h3 className="text-lg font-bold text-center mb-4">Progress of Project 3</h3>
      <Line 
        data={data} 
        options={{
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
        }} 
        height={280}
      />
    </div>
  );
};

export default LineChart;


