import React, { useState } from "react";
import BtnCard from "./BtnCard";
import { CardData } from "./Utilities";
import { BsArrowLeft } from "react-icons/bs";
import Details from "./Details";
const Projects = () => {
  const [activeCard, setActiveCard] = useState("Details");

  function HandleActiveCard(activePage) {
    setActiveCard(activePage);
  }

  return (
    <section id="Projects" className="py-4">
      <div className="top-btn pb-2">
        <button className=" border-none bg-page-btn-secondary rounded-lg shadow-sm px-2 py-1 flex gap-2 items-center justify-between">
          <span>{<BsArrowLeft />}</span>
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
      <div className="active-card-page">
        {activeCard === "Details" && <Details />}
      </div>
    </section>
  );
};

export default Projects;
