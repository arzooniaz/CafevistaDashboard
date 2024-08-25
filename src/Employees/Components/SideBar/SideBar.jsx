import React from "react";
import companyLogo from "../../Assets/logo_4x.png";
import { navMenu } from "./Utilities";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <section
      id="sidebar"
      className=" h-screen bg-dash-primary p-5 text-primary-txt"
    >
      <div id="comapny-logo">
        <img
          src={companyLogo}
          alt="cafevista logo"
          className="max-w-full h-auto"
        />
        <hr className="border-[1px] mt-2" />
      </div>
      <div
        id="nav-menu"
        className="flex flex-col pt-10 justify-center items-center"
      >
        <ul className=" flex flex-col gap-4">
          {navMenu.map((elem, index) => {
            return (
              <Link to={`/${elem.title}`}>
                <li key={index} className="flex items-center gap-3">
                  <span>
                    <img
                      src={elem.logo}
                      alt={`${elem.title}-logo`}
                      className="max-w-full h-auto"
                    />
                  </span>
                  <span>{elem.title}</span>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SideBar;
