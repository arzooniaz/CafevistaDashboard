import React from "react";
import { IoSearchOutline, IoNotificationsOutline } from "react-icons/io5";
import { FaRegUserCircle, FaExpandArrowsAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
const NavBar = ({ activePageData }) => {
  return (
    <section id="navbar">
      <div
        id="top-nav-bar"
        className="flex px-2 justify-between items-center pt-2 pb-1 pr-4"
      >
        <div
          className="search-bar flex gap-2 items-center bg-input-primary rounded-lg py-1 px-2 border-2
         border-[#7A7A7A] cursor-pointer"
        >
          <IoSearchOutline />
          <input
            type="text"
            className="appearance-none bg-transparent border-none outline-none focus:ring-0 p-0 m-0"
            placeholder="Search.."
          />
        </div>
        <div id="top-nav-btns" className="flex justify-around items-center">
          <div className="active-page-btn flex gap-2 items-center border-r-2 pr-4 border-r-black">
            <span>{<activePageData.logo className="w-6 h-6" />}</span>
            <span className="text-xl">{activePageData.title}</span>
          </div>
          <div className="menu-btns flex justify-between items-center gap-2 px-2">
            <IoNotificationsOutline className="w-6 h-6 cursor-pointer" />
            <FaRegUserCircle className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>
      <div
        id="sub-nav-bar"
        className=" border-primary-txt-dash border-t-[1.5px] border-b-[1.5px] p-2 flex justify-between items-center"
      >
        <div className="px-2 sub-nav-heading">
          <h2 className="flex items-center text-primary-txt-dash gap-2">
            <span>{<activePageData.logo className="w-4 h-4" />}</span>
            <span className="">{activePageData.title}</span>
          </h2>
        </div>
        <div className="sub-nav-btns flex justify-between items-center">
          <div className="share-btn pr-4 border-black border-r-2">
            <button className="bg-white inline-block px-2 py-1 border-primary-txt-dash border-[0.5px] rounded-md">
              Share
            </button>
          </div>
          <div className="down-btns flex justify-between items-center gap-2 px-2">
            <HiDownload className="w-5 h-5 text-primary-txt-dash cursor-pointer" />
            <FaRegStar className="w-5 h-5 text-primary-txt-dash cursor-pointer" />
            <FaExpandArrowsAlt className="w-5 h-5 text-primary-txt-dash cursor-pointer" />
            <BsThreeDots className="w-5 h-5 text-primary-txt-dash cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;