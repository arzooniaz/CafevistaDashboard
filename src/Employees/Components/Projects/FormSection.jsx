import React from "react";

const FormSection = ({ Data }) => {
  return (
    <>
      <div className="form-content flex flex-col items-center h-full bg-white rounded-md p-2">
        <h1 className="text-3xl font-bold text-center py-2">{Data.title}</h1>
        <div className="form-btns flex flex-col gap-2 items-center">
          {Data.btns.map((elem, index) => {
            return (
              <input
                key={index}
                type="text"
                className="bg-white block w-[27rem] text-xl text-center p-4 rounded-lg border-[0.5px] border-page-btn-secondary text-black"
                placeholder={`${elem}`}
              />
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

export default FormSection;
