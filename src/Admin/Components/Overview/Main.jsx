import React from 'react';
import LineChart from './LineChart';
import BarChart from './BarChart';
import ProgressChart1 from './ProgressChart1';
import ProgressChart2 from './ProgressChart2';
import { lineChartData, barChartData } from './Utilities';
import { FaStar, FaShareAlt, FaChartBar, FaUsers, FaBuilding, FaDollarSign, FaBars, FaChevronDown } from 'react-icons/fa';

const Main = () => {
    return (
        <div>
            <div className="w-full fixed top-0 left-0 right-0 bg-[#e5e5e5] p-4 rounded-b-md shadow-sm z-10">
                <div className="flex justify-between items-center flex-wrap">
                    <div className="flex items-center">
                        <FaBars className="mr-2" /> 
                        <h1 className="text-lg sm:text-xl font-semibold">FIRST PROJECT</h1> 
                        <FaChevronDown className="ml-2" /> 
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-4 mt-2 sm:mt-0">
                        <button className="py-1 px-3 sm:px-4 text-xs sm:text-sm bg-[#e5e5e5] border border-gray-400 hover:bg-gray-300 rounded-md">
                            Customize
                        </button>
                        <FaStar className="text-gray-400 hover:text-yellow-500 cursor-pointer text-sm sm:text-base" />
                        <FaShareAlt className="text-gray-400 hover:text-blue-500 cursor-pointer text-sm sm:text-base" />
                        <button className="py-1 px-2 text-xs sm:text-sm font-bold text-center bg-white border border-[#e5e5e5] hover:bg-gray-300 rounded-md">
                            ...
                        </button>
                    </div>
                </div>
                <div className="flex flex-wrap space-x-2 sm:space-x-6 space-y-2 border-b mt-4 -mb-2">
                    <span className="text-black font-semibold pb-2 flex items-center border-b-2 border-black text-xs sm:text-base">
                        <FaChartBar className="mr-1 text-sm sm:text-lg" /> Overview
                    </span>
                    <span className="text-gray-500 pb-2 flex items-center text-xs sm:text-base hover:text-black cursor-pointer">
                        <FaUsers className="mr-1 text-sm sm:text-lg" /> Managers
                    </span>
                    <span className="text-gray-500 pb-2 flex items-center text-xs sm:text-base hover:text-black cursor-pointer">
                        <FaBuilding className="mr-1 text-sm sm:text-lg" /> Companies
                    </span>
                    <span className="text-gray-500 pb-2 flex items-center text-xs sm:text-base hover:text-black cursor-pointer">
                        <FaDollarSign className="mr-1 text-sm sm:text-lg" /> Pricing
                    </span>
                    <span className="text-gray-500 pb-2 flex items-center text-xs sm:text-base hover:text-black cursor-pointer  ">
                        <FaDollarSign className="mr-1 text-sm sm:text-lg" /> Pricing Management
                    </span>
                </div>
            </div>
            <div className="ml-0 md:ml-10 mt-40 md:mt-28">
                <div className="flex flex-col md:flex-row justify-start py-8 space-y-4 md:space-y-0 md:space-x-6">
                    <div className="w-4/3 mx-5 md:mx-0 md:w-[29rem]">
                        <ProgressChart1 />
                    </div>
                    <div className="w-4/3 mx-5 md:mx-0 md:w-[29rem]">
                        <ProgressChart2 />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-start py-8 space-y-4 md:space-y-0 md:space-x-6">
                    <div className="w-4/3 mx-5 md:mx-0 md:w-[29rem]">
                        <LineChart data={lineChartData} />
                    </div>
                    <div className="w-4/3 mx-5 md:mx-0 md:w-[29rem]">
                        <BarChart data={barChartData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
