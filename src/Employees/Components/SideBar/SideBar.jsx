import React, { useState } from "react";
<<<<<<< HEAD
import companyLogo from "../../Assets/Final Logo.svg";
=======
import companyLogo from "../../Assets/Images/Final Logo.svg";
>>>>>>> 171c0f1 (Temporary commit to save changes)
import { navMenu } from "./Utilities";
import { MdLogout } from "react-icons/md";

const SideBar = ({ HandleActivePageBtn }) => {
  const [isActive, setIsActive] = useState("Dashboard");
  return (
    <section
      id="sidebar"
<<<<<<< HEAD
      className="h-screen bg-dash-primary pt-5 pb-10 text-primary-txt-dash flex flex-col justify-between"
=======
      className="h-full  w-56 lg:w-full bg-dash-primary pt-5 pb-10 text-primary-txt-dash flex flex-col justify-between"
>>>>>>> 171c0f1 (Temporary commit to save changes)
    >
      <div>
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
                    className={`flex cursor-pointer py-2 px-10 items-center gap-3 hover:bg-hover-primary group w-auto mx-auto rounded-md ${
                      isActive === elem.title ? "bg-hover-primary " : ""
                    }`}
                  >
                    <span>
                      <elem.logo
                        className={`w-4 h-4 group-hover:text-white ${
                          isActive === elem.title ? "text-white " : ""
                        }`}
                      />
                    </span>
                    <span
                      className={`group-hover:text-white ${
                        isActive === elem.title ? "text-white " : ""
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
      </div>
    </section>
  );
};

export default SideBar;
