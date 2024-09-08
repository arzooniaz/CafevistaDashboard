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
      className="h-full sm:min-h-screen grid lg:grid-cols-12 gap-2 p-4"
    >
      <div
        className={`lg:col-span-4 h-full sm:min-h-screen ${
          !checkClicked ? "block" : "hidden"
        } lg:block`}
      >
        <MessagesList HandleClickedChat={HandleClickedChat} />
      </div>
      <div
        className={`lg:col-span-8 ${
          checkClicked ? "block" : "hidden"
        } lg:block min-h-screen`}
      >
        <ChatWindow
          ChatData={openedChat}
          Messages={messages}
          HandleBackFunctionality={HandleBackFunctionality}
        />
      </div>
      {/* <div className="lg:col-span-3 hidden lg:flex min-h-screen  flex-col gap-2">
        <div>
          <UserProfile ChatData={openedChat} />
        </div>
        <div>
          <RecentActivity />
        </div>
      </div> */}
    </section>
  );
};

export default ChattingPage;
