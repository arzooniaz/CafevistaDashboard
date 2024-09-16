import React, { useState } from "react";
import BtnCard from "./BtnCard";
import { CardData } from "./Utilities";
import { FaCirclePlus } from "react-icons/fa6";
import Details from "./Details";
import Requirements from "./Requirements";
import Teams from "./Teams";
import Settings from "./Settings";
import Invoice from "./Invoice";
const Projects = ({ HandleCreateNewProjectScreen }) => {
  const [activeCard, setActiveCard] = useState("Details");

  function HandleActiveCard(activePage) {
    setActiveCard(activePage);
  }

  return (
    <section id="Projects" className="py-4">
      <div className="top-btn p-2">
        <button
          className=" border-none bg-page-btn-secondary rounded-lg shadow-sm px-2 py-1 flex gap-2 items-center justify-between"
          onClick={HandleCreateNewProjectScreen}
        >
          <span>{<FaCirclePlus className="text-primary w-5 h-5" />}</span>
          <span>Create New Project</span>
        </button>
      </div>
      <div className="card-btns grid grid-cols-6 md:grid-cols-12 gap-7 p-2">
        {CardData.map((elem, index) => (
          <BtnCard
            CardData={elem}
            key={index}
            HandleActiveCard={HandleActiveCard}
            activeCard={activeCard}
          />
        ))}
      </div>
      <div className="active-card-page p-2">
        {activeCard === "Details" && <Details />}
        {activeCard === "Functional Requirements" && <Requirements />}
        {activeCard === "Team" && <Teams />}
        {activeCard === "Setting" && <Settings />}
        {activeCard === "Invoice" && <Invoice />}
      </div>
    </section>
  );
};

export default Projects;
