import React from "react";

const UserProfile = ({
  ChatData: {
    id,
    title,
    mail,
    time,
    text,
    img,
    address,
    phone,
    portfolio,
    linkedin,
  },
}) => {
  return (
    <section className="User-Profile bg-white rounded-md p-2">
      <div className="user-title flex justify-center items-center gap-2">
        <img
          src={img}
          alt=""
          className="w-12 h-12 rounded-full object-contain"
        />
        <h1 className="font-semibold">{title}</h1>
      </div>
      <div className="user-details p-2">
        <h2 className="pb-2">
          <span className=" font-semibold">Address:</span>{" "}
          <span>{address}</span>
        </h2>
        <h2 className="pb-2">
          <span className=" font-semibold">phone:</span> <span>{phone}</span>
        </h2>
        <h2 className="pb-2">
          <span className=" font-semibold">email:</span> <span>{mail}</span>
        </h2>
        <h2 className="pb-2">
          <span className=" font-semibold">portfolio:</span>{" "}
          <span>{portfolio}</span>
        </h2>
        <h2 className="pb-2">
          <span className=" font-semibold">linkedin:</span>{" "}
          <span>{linkedin}</span>
        </h2>
        <h2 className="pb-2">
          <span className=" font-semibold">Address:</span>{" "}
          <span>{address}</span>
        </h2>
      </div>
    </section>
  );
};

export default UserProfile;
