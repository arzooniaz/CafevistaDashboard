import React, { useState } from "react";

const Profile = () => {
  const [firstName, setFirstName] = useState("Olivia");
  const [lastName, setLastName] = useState("John");
  const [email, setEmail] = useState("Olivia12@gmail.com");
  const [phone, setPhone] = useState("12345678");
  const [role, setRole] = useState("UI/UX Designer");
  const [country, setCountry] = useState("Pakistan");

  return (
    <div className="max-w-3xl mx-auto bg-gray-50 shadow-md rounded-md p-4 sm:p-6 mt-10">
      {/* Profile Picture */}
      <div className="flex justify-center sm:justify-start items-center space-x-4 mb-6">
        <img
          className="w-16 h-16 sm:w-24 sm:h-24 rounded-full"
          src="https://thumbs.dreamstime.com/z/technology-remote-job-lifestyle-concept-happy-smiling-indian-man-laptop-computer-working-home-office-indian-man-192151051.jpg"
          alt="Profile"
        />
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* First Name */}
        <div className="relative">
          <label className="block text-gray-700">First Name</label>
          <button className="absolute right-0 top-0 mt-2 mr-2 text-gray-500">
            <i className="fas fa-edit"></i> Edit
          </button>
          <div className="relative flex items-center">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm p-2 pr-10"
            />
            <i className="fas fa-user absolute right-3 top-3 text-gray-500"></i>
          </div>
        </div>

        {/* Last Name */}
        <div className="relative">
          <label className="block text-gray-700">Last Name</label>
          <button className="absolute right-0 top-0 mt-2 mr-2 text-gray-500">
            Save
          </button>
          <div className="relative flex items-center">
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm p-2 pr-10"
            />
            <i className="fas fa-user absolute right-3 top-3 text-gray-500"></i>
          </div>
        </div>

        {/* Email */}
        <div className="relative">
          <label className="block text-gray-700">Email</label>
          <span className="absolute right-0 top-0 mt-2 mr-2 text-green-500 text-sm flex items-center">
            <i className="fas fa-check-circle mr-1"></i> Verified
          </span>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm p-2 pr-10"
            />
            <i className="fas fa-envelope absolute right-3 top-3 text-gray-500"></i>
          </div>
        </div>

        {/* Phone */}
        <div className="relative">
          <label className="block text-gray-700">Phone</label>
          <span className="absolute right-0 top-0 mt-2 mr-2 text-green-500 text-sm flex items-center">
            <i className="fas fa-check-circle mr-1"></i> Verified
          </span>
          <div className="relative">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm p-2 pr-10"
            />
            <i className="fas fa-phone absolute right-3 top-3 text-gray-500"></i>
          </div>
        </div>

        {/* Role */}
        <div className="relative">
          <label className="block text-gray-700">Role</label>
          <div className="relative">
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm p-2 pr-10"
            />
            <i className="fas fa-briefcase absolute right-3 top-3 text-gray-500"></i>
          </div>
        </div>

        {/* Country */}
        <div className="relative">
          <label className="block text-gray-700">Country</label>
          <div className="relative">
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm p-2 pr-10"
            >
              <option value="Pakistan">Pakistan</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
            <i className="fas fa-chevron-down absolute right-3 top-3 text-gray-500"></i>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-6 flex justify-end">
        <button className="px-4 py-2 bg-gray-200 text-black rounded-md border border-gray-400 hover:bg-gray-300">
          Save
        </button>
      </div>
    </div>
  );
};

export default Profile;
