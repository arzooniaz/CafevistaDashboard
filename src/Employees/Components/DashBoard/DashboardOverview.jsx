import React from 'react';
import elipse4 from "../../Assets/Ellipse 28.png";
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

const summaryData = [
    { count: 32, label: 'In progress' },
    { count: 51, label: 'Completed' },
    { count: 9, label: 'Upcoming' },
    { count: 92, label: 'Total' },
];

const taskData = [
    { title: 'Interview Client', date: '9 August 2024', timeLeft: 'Today', avatar: elipse4, section: 'To Do' },
    { title: 'Designs', date: '12 August 2024', timeLeft: '3 Days', avatar: elipse4, section: 'Upcoming' },
    { title: 'Style Guide', date: '12 August 2024', timeLeft: '3 Days', avatar: elipse4, section: 'Upcoming' },
];

const DashboardOverview = () => {
    return (
        <div className="w-full max-w-5xl mx-auto px-4 py-3 bg-white shadow rounded-lg ml-1"> {/* Set max-width to 5xl for a wider container */}
            <div className="flex justify-between items-center mb-4 border-b border-gray-500 pb-2">
                <h2 className="text-2xl font-bold">Dashboard</h2>
                <p className="text-gray-500">August 2024</p>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-2">
                {summaryData.map((item, index) => (
                    <div key={index} className="text-center">
                        <p className="text-2xl font-bold">{item.count}</p>
                        <p className="text-gray-500">{item.label}</p>
                    </div>
                ))}
            </div>

            <div className="border-t border-gray-500 pt-0">
            <div className="grid grid-cols-3 gap-3">
                {taskData.map((task, index) => (
                    <div key={index} className="mb-2">
                        {/* Section label outside the task box */}
                        <p className="text-small font-semibold mb-1">{task.section}</p>
                        <div className="p-1 border-b border-gray-500 bg-gray-100 rounded shadow-sm">
                            <h3 className="text-base font-semibold">{task.title}</h3>
                            <div className="flex items-center text-xs text-gray-500">
                                <FaCalendarAlt className="mr-1" />
                                <p>{task.date}</p>
                            </div>
                            <div className="flex items-center text-xs text-gray-500 border-b border-gray-300">
                                <FaClock className="mr-1" />
                                <p>{task.timeLeft}</p>
                            </div>
                            <div className="flex items-center mt-2">
                                <img
                                    src={task.avatar}
                                    alt="Avatar"
                                    className="w-4 h-4 rounded-full mr-1"
                                />
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default DashboardOverview;
