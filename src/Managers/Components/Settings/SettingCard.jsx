import React from "react";

const SettingCard = ({ CardData, HandleActiveCard, activeCard }) => {
    return (
        <div
            className={`${
                activeCard === CardData.title
                    ? "bg-hover-primary text-white"
                    : "bg-input-primary text-black"
            } text-[20px] w-[85px] md:w-[95px] h-[30px] md:h-[35px] rounded-sm cursor-pointer bg-gray rounded-[3px] flex items-center justify-center`}
            onClick={() => HandleActiveCard(CardData.title)}
        >
            <div className="content">
                <h2 className="text-center text-[12px] md:text-[14px]">{CardData.title}</h2>
            </div>
        </div>
    );
};

export default SettingCard;
