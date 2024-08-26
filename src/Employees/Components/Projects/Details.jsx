import React from "react";

const Details = () => {
  return (
    <section id="Details-page" className="bg-white rounded-md p-2 m-2">
      <div className="details-content flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center py-2">Details</h1>
        <div className="details-btns flex flex-col gap-2 items-center">
          {[
            "Project name",
            "Description",
            "Start Date",
            "End Date",
            "Project Budget",
          ].map((elem, index) => {
            return (
              <button className="bg-white block w-[27rem] text-xl text-center p-4 rounded-lg border-[0.5px] border-page-btn-secondary">
                {elem}
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
    </section>
  );
};

export default Details;
