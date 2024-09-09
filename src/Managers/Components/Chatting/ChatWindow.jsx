import React from "react";
import AudioPlayer from "./AudioPlayer";
import feinAudio from "./FEIN.mp3";
import { IoMdAttach } from "react-icons/io";
import { TbMoodHappy } from "react-icons/tb";
import { TbSend2 } from "react-icons/tb";
import { IoIosArrowBack } from "react-icons/io";
const ChatWindow = ({
  ChatData: { id, title, mail, time, text, img },
  Messages,
  HandleBackFunctionality,
}) => {
  return (
    <section className="Chat-Whindow min-h-screen  relative bg-white rounded-md flex flex-col justify-between">
      <div className="heading-chat py-2 px-1 z-10 flex items-center gap-3 border-[#D8D8D8] rounded-lg border-b-[1.5px]">
        <div className="back-btn block lg:hidden">
          <button className="" onClick={HandleBackFunctionality}>
            <IoIosArrowBack className="w-7 h-7" />
          </button>
        </div>
        <div className="flex gap-2">
          <div className="heading-logo">
            <img
              src={img}
              alt=""
              className="w-12 h-12 rounded-full object-contain"
            />
          </div>
          <div className="chat-title">
            <h1 className="font-semibold">{title}</h1>
            <h2>{mail}</h2>
          </div>
        </div>
      </div>
      <div className="Chatting-content z-10 p-5 flex-1 overflow-y-auto max-h-screen lg:max-h-[82vh] ">
        {Messages.map((elem, index) => {
          return elem.senderId !== "user" ? (
            elem.type === "text" ? (
              <div className="text-left" key={index}>
                <p
                  className="p-2 px-4 bg-white rounded-lg border-[#000000]
                  border-2 text-[#000000] inline-block mb-4"
                >
                  {elem.content}
                </p>
              </div>
            ) : (
              <AudioPlayer key={index} audioFile={feinAudio} /> // Pass audio file as prop
            )
          ) : elem.type === "text" ? (
            <div className="text-right" key={index}>
              <p
                className="p-2 px-4 rounded-lg bg-hover-primary
                  text-white inline-block mb-4"
              >
                {elem.content}
              </p>
            </div>
          ) : (
            <AudioPlayer key={index} audioFile={feinAudio} /> // Pass audio file as prop
          );
        })}
      </div>
      <div
        className="send-functionality rounded-lg z-40 sticky w-full left-0 bottom-0 bg-white  
      "
      >
        <div className="send-input p-2 border-primary-txt-dash border-[1.5px] rounded-lg flex justify-between items-center ">
          <div className="attach-btn flex gap-2 items-center">
            <IoMdAttach className=" text-primary-txt-dash cursor-pointer" />
            <div className="input">
              <input
                type="text"
                className="focus:outline-none appearance-none"
                placeholder="Type Something here..."
              />
            </div>
          </div>
          <div className="send-emojis flex items-center gap-2">
            <TbMoodHappy className=" text-primary-txt-dash cursor-pointer" />
            <TbSend2 className=" text-primary-txt-dash cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatWindow;
