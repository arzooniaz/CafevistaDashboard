import React from 'react';
import { FaStar, FaShareAlt, FaChartBar, FaUsers, FaBuilding, FaDollarSign, FaBars, FaChevronDown } from 'react-icons/fa';

const projects = [
  { projectName: 'UI UX', teamLead: 'Aurora', teamMembers: 3, email: 'Aurora@gmail.com', paymentStatus: 'Paid' },
  { projectName: 'UI UX', teamLead: 'Aurora', teamMembers: 4, email: 'Aurora@gmail.com', paymentStatus: 'Paid' },
  { projectName: 'UI UX', teamLead: 'Aurora', teamMembers: 5, email: 'Aurora@gmail.com', paymentStatus: 'Unpaid' }
];

const PricingManagement = () => {
  return (
    <div className="p-6 bg-[#f5f5f5] min-h-screen">
      {/* Upper Header Section */}
      <div className="w-full fixed top-0 left-0 right-0 bg-[#e5e5e5] p-4 rounded-b-md shadow-sm z-10">
        <div className="flex justify-between items-center flex-wrap">
          {/* Logo and Dropdown Section */}
          <div className="flex items-center">
            <FaBars className="mr-2" /> {/* Three-bar icon before the text */}
            <h1 className="text-lg sm:text-xl font-semibold">FIRST PROJECT</h1> {/* Heading text */}
            <FaChevronDown className="ml-2" /> {/* Dropdown icon after the text */}
          </div>
          
          {/* Customize and Actions Section */}
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

        {/* Navigation Section */}
        <div className="flex flex-wrap space-x-2 sm:space-x-6 border-b mt-1 -mb-2">
          <span className="text-gray-500 pb-2 flex items-center text-xs sm:text-base hover:text-black cursor-pointer">
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
          <span className="text-black font-semibold pb-2 flex items-center border-b-2 border-black text-xs sm:text-base">
            <FaDollarSign className="mr-1 text-sm sm:text-lg" /> Pricing Management
          </span>
        </div>
      </div>

      {/* Table Section */}
      <div className="mt-36 bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full bg-white border-collapse rounded-md">
          <thead>
            <tr>
              <th className="py-2 px-4 text-left border-b border-gray-400 border-r" style={{ width: '20%' }}>Project Name</th>
              <th className="py-2 px-4 text-left border-b border-gray-400 border-r" style={{ width: '20%' }}>Team Lead</th>
              <th className="py-2 px-4 text-left border-b border-gray-400 border-r" style={{ width: '15%' }}>Team Members</th>
              <th className="py-2 px-4 text-left border-b border-gray-400 border-r" style={{ width: '25%' }}>Email</th>
              <th className="py-2 px-4 text-left border-b border-gray-400" style={{ width: '15%' }}>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index} className="border-b border-gray-400">
                <td className="py-2 px-4 border-r border-gray-400 whitespace-nowrap">{project.projectName}</td>
                <td className="py-4 px-4 border-r border-gray-400">{project.teamLead}</td>
                <td className="py-4 px-4 border-r border-gray-400 ">{project.teamMembers}</td>
                <td className="py-4 px-4 border-r border-gray-400">{project.email}</td>
                <td className="py-4 px-4">{project.paymentStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingManagement;
