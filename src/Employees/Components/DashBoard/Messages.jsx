import React from "react";
import elipse1 from "../../Assets/Images/Ellipse 16.png";
import elipse3 from "../../Assets/Images/Ellipse 27.png";
import elipse5 from "../../Assets/Images/Ellipse 4.png";
import elipse2 from "../../Assets/Images/Ellipse 25.png";

// Sample data for messages
const messages = [
  {
    id: 1,
    name: "Elizabeth",
    message: "Hey",
    time: "9:05am",
    avatar: elipse3, // Replace with actual image URL
  },
  {
    id: 2,
    name: "Aurora",
    message: "I need designs",
    time: "8:15am",
    avatar: elipse1, // Replace with actual image URL
  },
  {
    id: 3,
    name: "Aurora",
    message: "I've attached the file",
    time: "7:50am",
    avatar: elipse1, // Replace with actual image URL
  },
  {
    id: 4,
    name: "William",
    message: "Hey",
    time: "7:45am",
    avatar: elipse2, // Replace with actual image URL
  },
];

const Messages = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold mb-4">Messages</h2>
      <div className="grid gap-4">
        {messages.map((msg) => (
          <div key={msg.id} className="flex items-center space-x-4">
            <img
              src={msg.avatar}
              alt={`${msg.name}'s avatar`}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold">{msg.name}</h3>
                <span className="text-xs font-bold ">{msg.time}</span>
              </div>
              <p className="text-sm text-gray-600">{msg.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
