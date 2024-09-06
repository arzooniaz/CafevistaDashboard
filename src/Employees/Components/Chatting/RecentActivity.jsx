import React from "react";

const RecentActivity = () => {
  return (
    <section className="Recenet-Activity bg-white rounded-md">
      <div className="title p-2 text-center border-[#D8D8D8] border-b-[1.5px] rounded-lg ">
        <h1 className="font-semibold">Recent Activity</h1>
      </div>
      <div className="flex flex-col gap-2 items-center pt-3 pb-3">
        <p>Conversation at 12/08/2024</p>
        <p>Hey there im using whatsapp </p>
        <button className=" bg-red-500 p-2 rounded-lg text-black">
          View full Activity timeline
        </button>
        <h1>
          <span>Address:</span>
          <span>423244211</span>
        </h1>
      </div>
    </section>
  );
};

export default RecentActivity;
