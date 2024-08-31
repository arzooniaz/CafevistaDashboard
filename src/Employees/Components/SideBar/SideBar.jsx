import React, { useState } from "react";
import companyLogo from "../../Assets/Final Logo.svg";
import { navMenu } from "./Utilities";
import { Link } from "react-router-dom";
import logoutLogo from "../../Assets/logoutLogo.svg";
import { MdLogout } from "react-icons/md";

const SideBar = ({ HandleActivePageBtn }) => {
  const [isActive, setIsActive] = useState("Dashboard");
  return (
    <section
      id="sidebar"
      className="h-screen bg-dash-primary pt-5 pb-10 text-primary-txt-dash flex justify-between flex-col"
    >
      <div id="company-logo">
        <img
          src={companyLogo}
          alt="cafevista logo"
          className="w-[6rem] mx-auto"
        />
        <hr className="border-[1px] mt-2" />
      </div>
      <div
        id="nav-menu"
        className="flex flex-col pt-10 justify-center items-center w-full"
      >
        <ul className="flex flex-col gap-4 w-full">
          {navMenu.map((elem, index) => {
            return (
              <div>
                <li
                  key={index}
                  onClick={() => {
                    setIsActive(elem.title);
                    HandleActivePageBtn(elem);
                  }}
                  className={`flex py-2 px-10 items-center gap-3 hover:bg-hover-primary   group  w-auto mx-auto rounded-md ${
                    isActive == elem.title ? "bg-hover-primary " : ""
                  }`}
                >
                  <span>
                    <elem.logo
                      className={`w-4 h-4 group-hover:text-white ${
                        isActive == elem.title ? "text-white " : ""
                      }`}
                    />
                  </span>
                  <span
                    className={`group-hover:text-white ${
                      isActive == elem.title ? "text-white " : ""
                    }`}
                  >
                    {elem.title}
                  </span>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
      <div id="logout" className="px-10 mt-auto">
        <div className="flex items-center gap-3">
          <span>
            <MdLogout className="max-w-full h-auto" />
          </span>
          <span>Logout</span>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
