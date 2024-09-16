import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { MdGroups } from "react-icons/md";
import { RiShareBoxLine } from "react-icons/ri";
const ProjectTypeSelection = ({ HandleTrackPage, HandleUserChoice }) => {
  return (
    <section className="w-full h-screen">
      <div className="back-cancel-btn w-full flex justify-between items-center p-6">
        <button className="back-btn">
          <IoIosArrowRoundBack
            className="w-7 h-7"
            onClick={() => HandleTrackPage("Decrement")}
          />
        </button>
        <button className="cancel-btn">
          <RxCross2 className="w-6 h-6" />
        </button>
      </div>
      <div className="type-content h-[79vh] flex flex-col justify-center items-center gap-4">
        <div className=" flex justify-center flex-col md:flex-row gap-4 items-center">
          <div>
            <h1 className=" text-center text-2xl py-2">Inhouse</h1>
            <button
              className="border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center  w-[13rem] h-[12rem] cursor-pointer hover:bg-gray-100 transition duration-300"
              onClick={() => {
                HandleUserChoice("InHouse");
                HandleTrackPage("Increment");
              }}
            >
              <span className="text-6xl text-gray-500">
                <MdGroups />
              </span>
            </button>
          </div>
          <div>
            <h1 className=" text-center text-2xl py-2">OutSource</h1>
            <button
              className="border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center  w-[13rem] h-[12rem]  cursor-pointer hover:bg-gray-100 transition duration-300"
              onClick={() => {
                HandleUserChoice("OutSource");
                HandleTrackPage("Increment");
              }}
            >
              <span className="text-6xl text-gray-500">
                <RiShareBoxLine />
              </span>
            </button>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500 p-2">
            Would u prefer to go with us or choose a different company?
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectTypeSelection;
