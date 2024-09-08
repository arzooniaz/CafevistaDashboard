import React, { useState } from "react";
import SettingCard from "./SettingCard";
import { BsArrowLeft } from "react-icons/bs";
import { CardData } from "./Utilities";
import Profile from "./Profile";
import Password from "./Password";
import Notification from "./Notification";

const Settings = () => {
 
  const [activeCard, setActiveCard] = useState("Profile");

  function HandleActiveCard(activePage) {
    setActiveCard(activePage);
  }

  return (
    <section id="Settings" className="py-4 ml-6">
      <button className="border-none bg-page-btn-secondary rounded-lg shadow-sm px-2 py-1 flex gap-2 items-center justify-between">
        <span>{<BsArrowLeft />}</span>
        <span>Settings</span>
      </button>
      <div className="my-2 bg-white w-[375px] h-[45px] flex flex-row justify-evenly items-center rounded-sm ">
        {CardData.map((elem, index) => (
          <SettingCard
            CardData={elem}
            key={index}
            HandleActiveCard={HandleActiveCard}
            activeCard={activeCard}
          />
        ))}
      </div>

      <div className="active-card-page mt-5">
        {activeCard === "Profile" && <Profile />}
        {activeCard === "Password" && <Password />}
        {activeCard === "Notification" && <Notification />}
      </div>
    </section>
  );
};

export default Settings;
