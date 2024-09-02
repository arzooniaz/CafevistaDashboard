import React from "react";

const BtnCard = ({ CardData, HandleActiveCard, activeCard }) => {
  return (
    <div
      className={`card p-2 h-[7.5rem]  rounded-lg shadow-sm col-span-2 flex justify-center items-center flex-col cursor-pointer ${
        activeCard == CardData.title
          ? "bg-hover-primary text-white"
          : "bg-white text-black"
      }`}
      onClick={() => HandleActiveCard(CardData.title)}
    >
      <div className="logo">
        <CardData.logo className="w-5 h-5" />
      </div>
      <div className="content">
        <h2 className="text-center">{CardData.title}</h2>
      </div>
    </div>
  );
};

export default BtnCard;
