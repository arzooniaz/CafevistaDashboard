import React, { useState } from "react";
import { FaPhoneAlt, FaVideo } from "react-icons/fa";
import { FiArrowRight,FiSend } from "react-icons/fi";
import elipse5 from "../../Assets/Ellipse 4.png";
import elipse3 from "../../Assets/Ellipse 27.png";
import { IoMdAttach } from "react-icons/io";
import { TbMoodHappy } from "react-icons/tb";
import { TbSend2 } from "react-icons/tb";

// Sample chat data
const chatData = [
  {
    id: 1,
    name: "Elizabeth",
    message: "All set thanks again",
    time: "9:05am",
    isUser: false,
    avatar: elipse3,
  },
  {
    id: 2,
    name: "Elizabeth",
    message: "i need documents",
    time: "9:07am",
    isUser: false,
    avatar: elipse3,
  },
  {
    id: 3,
    message: "okay",
    time: "9:10am",
    isUser: true,
    avatar: elipse5,
  },
];

const Chatt = () => {
  const [messages, setMessages] = useState(chatData);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          message: inputValue,
          time: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
          }),
          isUser: true,
          avatar: elipse5, 
        },
      ]);
      setInputValue("");
    }
  };

  return (
    <div className="max-wd mx-auto bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
      
      <div className="flex items-center px-1 py-2 border-b">
        <img
          src={elipse3}
          alt="Elizabeth's avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3 flex-1">
          <h3 className="font-bold text-lg">Elizabeth</h3>
        </div>
        
        <div className="flex space-x-1">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <FaPhoneAlt className="text-gray-600" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <FaVideo className="text-gray-600" />   
          </button>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="grid gap-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.isUser ? "justify-end" : "justify-start"} items-end`}
            >
              {!msg.isUser && (
                <img
                  src={msg.avatar}
                  alt="Other participant avatar"
                  className="w-6 h-6 rounded-full mr-2"
                />
              )}
              <div
                className={`max-w-xs ${msg.isUser ? "bg-blue-600 text-white" : "bg-gray-200"} p-2 rounded-lg text-sm shadow-md`}
              >
                <p>{msg.message}</p>
              </div>
              {msg.isUser && (
                <img
                  src={msg.avatar}
                  alt="User avatar"
                  className="w-6 h-6 rounded-full ml-2"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Input field */}
      <div className="send-functionality ">
        <div className="send-input mt-4 px-1 py-2 border-primary-txt-dash border-[1px] rounded-lg flex justify-between items-center ">
          <div className="attach-btn flex gap-1 items-center">
            <IoMdAttach className=" text-primary-txt-dash cursor-pointer" />
            <div className="input  ">
              <input
                type="text"
                className="focus:outline-none appearance-none"
                placeholder="Type Something here..."
              />
            </div>
          </div>
          <div className="send-emojis flex items-center gap-1">
            <TbMoodHappy className=" text-primary-txt-dash cursor-pointer" />
            <TbSend2 className=" text-primary-txt-dash cursor-pointer" />
          </div>
        </div>
    </div>
    </div>
  );
};

export default Chatt;
