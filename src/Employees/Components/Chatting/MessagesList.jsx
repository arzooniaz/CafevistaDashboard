import React from "react";
import { MessagesData } from "./Utilities";
import { RiLineChartLine } from "react-icons/ri";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import Chat from "./Chat";
const MessagesList = ({HandleClickedChat}) => {
  return (
    <div className=" bg-white rounded-md min-h-screen ">
      <div className="heading-messages p-2 flex justify-between items-center rounded-md border-b-[1.5px] border-b-[#D8D8D8]">
        <h1 className=" font-semibold">Messages</h1>
        <button className="flex justify-between items-center text-primary-txt-dash bg-[#FFFDFD] px-1 border-[#D8D8D8] rounded-lg border">
          <span className="p-1 pr-2">
            <RiLineChartLine />
          </span>
          <span>Reports</span>
        </button>
      </div>
      <div className="action-msgs-btns flex justify-between items-center p-2 rounded-lg border-b-[1.5px] border-b-[#D8D8D8]">
        <div className="action-dropdown">
          <select className="border-[1.5px] border-[#D8D8D8] rounded-md px-2  focus:outline-none font-semibold flex items-center justify-between">
            <option value="Open">Open </option>
            <option value="Close">Close</option>
          </select>
        </div>
        <div className="action-btns flex justify-between items-center gap-2">
          <FaRegTrashAlt className="cursor-pointer text-primary-txt-dash " />
          <HiOutlineDotsVertical className="cursor-pointer text-primary-txt-dash " />
        </div>
      </div>
      <div className="msgs-list">
        {MessagesData.map((elem, index) => (
          <Chat ChatData={elem} key={index} HandleClickedChat={HandleClickedChat} />
        ))}
      </div>
    </div>
  );
};

export default MessagesList;
