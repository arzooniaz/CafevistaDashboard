import React from "react";

const SettingCard = ({ CardData, HandleActiveCard, activeCard }) => {
    return (
        <div
        className={`${
            activeCard === CardData.title
                ? "bg-hover-primary text-white"
                : "bg-input-primary text-black"
        } text-[14.5px] w-[100px] h-[30px] rounded-sm cursor-pointer bg-gray p-[3px]`}
        onClick={() => HandleActiveCard(CardData.title)}
    >
            <div className="content">
                <h2 className="text-center">{CardData.title}</h2>
            </div>
        </div>
    );
};

export default SettingCard;
