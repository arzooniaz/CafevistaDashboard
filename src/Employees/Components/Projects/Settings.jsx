import React from "react";
import { SettingsData } from "./Utilities";
const Settings = () => {
  return (
    <>
      <div className="form-content flex flex-col items-center h-full bg-white rounded-md p-2">
        <h1 className="text-3xl font-bold text-center py-2">Settings</h1>
        <div className="form-btns flex flex-col gap-2 items-center">
          {SettingsData.map((elem, index) => {
            return (
              <button
                key={index}
                className="bg-white w-[27rem] cursor-pointer text-xl text-center p-4 rounded-lg flex items-center justify-center gap-2 border-[0.5px] border-page-btn-secondary text-black"
              >
                <span>{<elem.logo />}</span> <span>{elem.title}</span>
              </button>
            );
          })}
        </div>
        <div className="action-btns w-[27rem] flex justify-between items-center py-2">
          <div className="action-left-btn">
            <button className="bg-white border-page-secondary border-[0.5px] p-2 rounded-lg font-semibold">
              Add More
            </button>
          </div>
          <div className="action-right-btn flex gap-2">
            <button className="bg-white border-page-secondary border-[0.5px] p-2 rounded-lg font-semibold">
              Save
            </button>
            <button className="bg-white border-page-secondary border-[0.5px] p-2 rounded-lg font-semibold">
              Save & Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
