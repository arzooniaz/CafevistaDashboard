import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
const ProjectDetailsForm = ({ HandleTrackPage }) => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const HandleFormInputs = (e) => {
    e.preventDefault();
    if (projectName && projectDescription) {
      HandleTrackPage("Increment");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <section className="h-screen w-full">
      <div className="back-cancel-btn w-full flex justify-between items-center p-6">
        <div className="flex items-center gap-2">
          <button className="back-btn">
            <IoIosArrowRoundBack
              className="w-7 h-7"
              onClick={() => HandleTrackPage("Decrement")}
            />
          </button>
          <h1 className="text-2xl">New Project</h1>
        </div>
        <button className="cancel-btn">
          <RxCross2 className="w-6 h-6" />
        </button>
      </div>
      <div className="form-content px-6">
        <div className="form grid sm:grid-cols-6">
          <form className="sm:col-span-3 flex flex-col gap-3">
            <label htmlFor="projectName" className="text-primary text-lg">
              Project Name
            </label>
            <input
              type="text"
              id="projectName"
              className=" w-full rounded-lg py-2 px-2 outline-blue-600 border-primary border-2"
              onChange={(e) => setProjectName(e.target.value)}
              required
            />
            <label htmlFor="description" className="text-primary text-lg">
              Description
            </label>
            <textarea
              name=""
              id="description"
              cols="30"
              rows="5"
              className=" w-full rounded-lg py-2 px-2 outline-blue-600 border-primary border-2"
              required
              onChange={(e) => setProjectDescription(e.target.value)}
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-primary px-10 py-2 rounded-lg text-white"
                onClick={HandleFormInputs}
              >
                Next
              </button>
            </div>
          </form>
          <div className="view-ui sm:col-span-3">UI here</div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsForm;
