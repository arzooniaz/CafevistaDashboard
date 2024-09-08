import React, { useState } from "react";
import SettingCard from "./SettingCard";
import { CardData } from "./Utilities";
import Profile from "./Profile";
import Password from "./Password";
import Notification from "./Notification";
import Team from "./Team";

const SettingsPage = () => {
 
  const [activeCard, setActiveCard] = useState("Profile");

  function HandleActiveCard(activePage) {
    setActiveCard(activePage);
  }

  return (
    <section id="Settings" className="py-4 ml-4 md:ml-6">
    <div className="bg-white sm:w-[480px] w-[400px] h-[50px] flex flex-wrap justify-around items-center rounded-[7px]">
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
        {activeCard === "Team" && <Team />}
      </div>
    </section>
  );
};

export default SettingsPage;
