import React, { useState } from "react";
import MessagesList from "./MessagesList";
import ChatWindow from "./ChatWindow";
import RecentActivity from "./RecentActivity";
import UserProfile from "./UserProfile";
import { MessagesData, ChattingData } from "./Utilities";
const ChattingPage = () => {
  const [openedChat, setOpenedChat] = useState(MessagesData[0]);
  const [messages, setMessages] = useState(ChattingData[1]);
  const [checkClicked, setCheckClicked] = useState(false);
  function HandleClickedChat(ChatId) {
    setOpenedChat(MessagesData.filter((elem) => ChatId === elem.id)[0]);
    setMessages(ChattingData[ChatId]);
    setCheckClicked(!checkClicked);
  }
  function HandleBackFunctionality() {
    setCheckClicked(!checkClicked);
  }
  return (
    <section
      id="Chat-Page"
      className=" min-h-screen grid sm:grid-cols-12 gap-2 p-4"
    >
      <div
        className={`sm:col-span-4 min-h-screen ${
          !checkClicked ? "block" : "hidden"
        } sm:block`}
      >
        <MessagesList HandleClickedChat={HandleClickedChat} />
      </div>
      <div
        className={`sm:col-span-5 ${
          checkClicked ? "block" : "hidden"
        } sm:block min-h-screen`}
      >
        <ChatWindow
          ChatData={openedChat}
          Messages={messages}
          HandleBackFunctionality={HandleBackFunctionality}
        />
      </div>
      <div className="sm:col-span-3 hidden sm:flex min-h-screen  flex-col gap-2">
        <div>
          <UserProfile ChatData={openedChat} />
        </div>
        <div>
          <RecentActivity />
        </div>
      </div>
    </section>
  );
};

export default ChattingPage;
