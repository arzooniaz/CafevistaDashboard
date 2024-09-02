import React from "react";

const Chat = ({
  ChatData: { id, title, mail, time, text, img },
  HandleClickedChat,
}) => {
  return (
    <div
      className="flex justify-between items-center gap-4 p-2 rounded-lg border-b-[1.5px] cursor-pointer border-b-[#D8D8D8]"
      onClick={() => HandleClickedChat(id)}
    >
      <div className="chat-title-and-image flex justify-between gap-2">
        <div className="chat-img">
          <img
            src={img}
            alt=""
            className="w-12 h-12 rounded-full object-contain"
          />
        </div>
        <div className="chat-title text-sm">
          <h1 className="font-semibold">{title}</h1>
          <h2>{mail}</h2>
          <p>{text}</p>
        </div>
      </div>
      <div className="msg-time">
        <h1 className="font-semibold">{time}</h1>
      </div>
    </div>
  );
};

export default Chat;
