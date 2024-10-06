export const lineChartData = {
    labels: ['day1', 'day10', 'day15', 'day20', 'day25', 'day30'],
    datasets: [
      {
        label: 'Important Task',
        data: [2, 3, 4, 3, 5, 4],
        borderColor: '#032858',
        backgroundColor: '#032858',
        borderWidth: 2,
        tension: 0.4, 
      },
      {
        label: 'Overall Task',
        data: [1, 2, 2.5, 3, 3.5, 4],
        borderColor: '#9CA3AF',
        backgroundColor: '#9CA3AF',
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };
  
  export const barChartData = {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    datasets: [
      {
        label: 'Progress',
        data: [2, 3, 4, 5, 1.5, 4, 5, 2, 4, 5, 4, 5],
        backgroundColor: 'rgba(59, 130, 246, 0.4)', 
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
    ],
  };

export const project1Data = {
    labels: ['Day01', 'Day10', 'Day15', 'Day20', 'Day25'],
    datasets: [
      {
        label: 'Completed Task',
        data: [4, 5, 6, 4, 3], 
        backgroundColor: '#032858', 
      },
      {
        label: 'Uncompleted Task',
        data: [2, 1, 0, 2, 3],
        backgroundColor: '#D1D5DB', 
      },
    ],
  };
  
  export const project2Data = {
    labels: ['week1', 'week2', 'week3', 'week4', 'week5', 'week6'],
    datasets: [
      {
        label: 'Completed Task',
        data: [1, 3, 4, 5, 4, 6], 
        borderColor: '#032858', 
        backgroundColor: 'rgba(29, 78, 216, 0.2)', 
        fill: true,
      },
      {
        label: 'Uncompleted Task',
        data: [3, 2, 2, 1, 2, 3], 
        borderColor: '#EF4444', 
        backgroundColor: 'rgba(239, 68, 68, 0.2)', 
        fill: true,
      },
    ],
  };
  

