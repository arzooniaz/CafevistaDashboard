import React, { useState } from "react";
import SideBar from "../Components/SideBar/SideBar";
import NavBar from "../Components/NavBar/NavBar";
<<<<<<< HEAD
import { RiHomeLine } from "react-icons/ri";
import Projects from "../Components/Projects/Projects";
import Settings from "../Components/Settings/Settings";
import { ChattingPage } from "../../Imports";
=======
import { RiHomeLine, RiMenuLine } from "react-icons/ri"; // Import menu icon
import Projects from "../Components/Projects/Projects";
import { ChattingPage, DashBoard, Pricing, Settings } from "./Imports";

>>>>>>> 171c0f1 (Temporary commit to save changes)
const EmployeeLayout = () => {
  const [activePageBtn, setActivePageBtn] = useState({
    title: "Dashboard",
    logo: RiHomeLine,
  });

<<<<<<< HEAD
  function HandleActivePageBtn(pageData) {
    setActivePageBtn(pageData);
  }
  return (
    <section className="page-layout">
      <div className="page-layout__header"></div>
      <div className="page-layout__content grid lg:grid-cols-12">
        <div className="sidebar  sm:col-span-3 lg:col-span-2 hidden lg:block ">
          <SideBar HandleActivePageBtn={HandleActivePageBtn} />
        </div>
        <div className="content-area min-h-screen sm:col-span-9 lg:col-span-10 bg-page-secondary">
=======
  // State for toggling the sidebar
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  function HandleActivePageBtn(pageData) {
    setActivePageBtn(pageData);
    setIsSidebarVisible(false); // Hide sidebar when a new page is selected
  }

  return (
    <section className="page-layout relative">
      <div className="page-layout__header"></div>
      <div className="page-layout__content grid lg:grid-cols-12 relative">
        {/* Sidebar for large screens */}
        <div className="sidebar sm:col-span-3 lg:col-span-2 hidden lg:block">
          <SideBar HandleActivePageBtn={HandleActivePageBtn} />
        </div>

        {/* Sidebar for small screens */}
        <div
          className={`fixed inset-y-0 left-0 z-40 lg:hidden transform ${
            isSidebarVisible ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out lg:relative`}
        >
          <SideBar HandleActivePageBtn={HandleActivePageBtn} />
        </div>

        {/* Overlay (cover only content area, not the sidebar) */}
        <div
          className={`overlay lg:hidden fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out ${
            isSidebarVisible ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsSidebarVisible(false)}
          style={{ left: "14rem" }} // Ensure overlay starts after sidebar
        ></div>

        {/* Main Content Area */}
        <div className="content-area min-h-screen sm:col-span-9 lg:col-span-10 bg-page-secondary relative">
          {/* Toggle button for sidebar */}
          <div className="lg:hidden p-4">
            <button
              onClick={() => setIsSidebarVisible(!isSidebarVisible)}
              className="text-xl"
            >
              <RiMenuLine />
            </button>
          </div>

>>>>>>> 171c0f1 (Temporary commit to save changes)
          <div className="nav-bar">
            <NavBar activePageData={activePageBtn} />
          </div>
          <div className="main-pages min-h-screen">
            {activePageBtn.title === "Projects" && <Projects />}
            {activePageBtn.title === "Chats" && <ChattingPage />}
<<<<<<< HEAD
=======
            {activePageBtn.title === "Dashboard" && <DashBoard />}
            {activePageBtn.title === "Pricing" && <Pricing />}
>>>>>>> 171c0f1 (Temporary commit to save changes)
            {activePageBtn.title === "Settings" && <Settings />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeLayout;
