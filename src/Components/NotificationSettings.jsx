import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

const NotificationSettings = () => {
  const [settings, setSettings] = useState({
    newComment: true,
    projectUpdate: true,
    newMember: true,
    newPage: true,
    emailNotification: false,
    chatNotification: false,
  });

  const toggleSetting = (setting) => {
    setSettings({ ...settings, [setting]: !settings[setting] });
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Main Content */}
      <main className="flex-grow p-6">
        {/* Top Navigation */}
        <header className="flex items-center space-x-4 mb-6">
          
            <FiArrowLeft className="text-xl" />
            <span className="text-xl font-medium">Settings</span>
          
        </header>

        {/* Tabs */}
        <div className="bg-gray-50 w-full sm:w-[450px] p-1 rounded-lg shadow-lg">
          <div className="grid grid-cols-2 sm:flex sm:space-x-5 mt-2 mb-3">
            <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">Profile</button>
            <button className="px-4 py-2 bg-gray-200  rounded-lg">Password</button>
            <button className="px-1 py-2 bg-blue-900 text-white rounded-lg hover:bg-gray-300 px-4">Notification</button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">Team</button>
          </div>
        </div>

        {/* Notification Section */}
        <div className="bg-gray-50 mt-2 p-6 rounded-lg shadow-lg w-full lg:w-2/4">
          <h3 className="text-xl font-medium mb-6">Get notified about new activities in project</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>New comment by other member</span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={settings.newComment}
                    onChange={() => toggleSetting('newComment')}
                  />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="flex justify-between items-center">
                <span>Update in Project</span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={settings.projectUpdate}
                    onChange={() => toggleSetting('projectUpdate')}
                  />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="flex justify-between items-center">
                <span>New member joined team</span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={settings.newMember}
                    onChange={() => toggleSetting('newMember')}
                  />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="flex justify-between items-center">
                <span>New Page created in project</span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={settings.newPage}
                    onChange={() => toggleSetting('newPage')}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Email & Chat Notification Section */}
        <div className="bg-gray-50 mt-4 p-6 rounded-lg shadow-lg w-full lg:w-2/4">
          <h3 className="text-xl font-medium mb-6">Get notified wherever you are</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Email Notification</span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={settings.emailNotification}
                    onChange={() => toggleSetting('emailNotification')}
                  />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="flex justify-between items-center">
                <span>Chat Notification</span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={settings.chatNotification}
                    onChange={() => toggleSetting('chatNotification')}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotificationSettings;
