import React from "react";

const CreateProjectIntro = ({ HandleTrackPage }) => {
  return (
    <section className="create-project-intro">
      <div className="min-h-screen flex items-center justify-center bg-opacity-50 backdrop-blur-lg bg-gray-200">
        <div className="relative p-10 flex flex-col justify-center items-center">
          <h1 className="text-xl sm:text-3xl font-semibold mb-2">
            Create a new project
          </h1>
          <p className="text-gray-500 mb-8">Let’s kick off your project!</p>
          <button
            className="border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center p-16 px-20 cursor-pointer hover:bg-gray-100 transition duration-300"
            onClick={() => HandleTrackPage("Increment")}
          >
            <span className="text-6xl text-gray-500">+</span>
          </button>
          <p className="mt-4 text-center text-gray-500">
            Blank Project <br /> start from scratch
          </p>
        </div>
      </div>

      {/* <div className="h-screen w-full bg-opacity-50 backdrop-blur-lg bg-gray-500 flex justify-center items-center">
        <div className="create-project-content flex justify-center items-center flex-col">
          <h1 className=" text-4xl">Create New Project</h1>
          <p className="text-base">Let's kick off our project</p>
          <button className=" border-2 border-dashed border-black w-28 h-28">
            +
          </button>
          <h3 className="text-xl">Blank project</h3>
          <p className="text-sm text-gray-600">Start from Scratch</p>
        </div>
      </div> */}
    </section>
  );
};

export default CreateProjectIntro;
