import React from 'react';
import { FiArrowLeft } from 'react-icons/fi'; // Import arrow icon from react-icons

const PasswordSetting = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Main Content */}
      <main className="flex-grow p-6">
        {/* Top Navigation */}
        <header className="flex items-center space-x-4 mb-6">
          <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 flex items-center space-x-2">
            <FiArrowLeft className="text-xl" />
            <span className="text-xl font-medium">Settings</span>
          </button>
        </header>

        {/* Tabs */}
        <div className="bg-gray-50 w-full sm:w-[450px] p-4 rounded-lg shadow-lg">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-5 mt-2 mb-3">
  <button className="bg-gray-200 text-sm px-6 py-4 rounded-lg hover:bg-gray-300">Profile</button>
  <button className="bg-blue-900 text-white text-sm px-2 py-4 rounded-lg hover:bg-gray-300">Password</button>
  <button className="bg-gray-200 text-sm px-2 py-4 rounded-lg hover:bg-gray-300">Notification</button>
  <button className="bg-gray-200 text-sm px-6 py-4 rounded-lg hover:bg-gray-300">Team</button>

</div>
        </div>

        {/* Password Form */}
        <div className="bg-gray-50 mt-2 p-6 sm:p-12 rounded-lg shadow-lg w-full sm:w-[450px] md:w-3/4 lg:w-1/2">
          <h3 className="text-xl font-bold mb-6">Change Password</h3>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* First Column (Old, New, Confirm Password) */}
            <div className="col-span-2 sm:col-span-1 space-y-4">
              {/* Old Password */}
              <div>
                <label className="block mb-2 text-sm font-medium">Old Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter old password"
                />
              </div>

              {/* New Password */}
              <div>
                <label className="block mb-2 text-sm font-medium">New Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter new password"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block mb-2 text-sm font-medium w-[150px]">Confirm Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Confirm new password"
                />
              </div>

              {/* Save Button */}
              <div className="flex justify-center">
                <button className="bg-gray-50 text-black font-bold px-4 py-2 border border-gray-400 rounded-lg hover:bg-blue-900">
                  Save
                </button>
              </div>
            </div>

            {/* Second Column (Phone No Verification) */}
            <div className="col-span-2 sm:col-span-1">
              <label className="block mb-2 text-sm font-medium">Phone No Verification</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="12345678"
              />
              <div className="flex justify-center mt-2">
                <button className="bg-gray-50 text-black font-bold px-4 py-2 border border-gray-400 rounded-lg hover:bg-blue-900">
                  Verify
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default PasswordSetting;
