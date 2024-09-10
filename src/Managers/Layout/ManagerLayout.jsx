import React, { useState } from "react";
import SideBar from "../Components/SideBar/SideBar";
import NavBar from "../Components/NavBar/NavBar";
import { RiHomeLine, RiMenuLine } from "react-icons/ri"; // Import menu icon
import {
  ChattingPage,
  DashBoard,
  Projects,
  Settings,
  Clients,
  History,
} from "./Imports";

const ManagerLayout = () => {
  const [activePageBtn, setActivePageBtn] = useState({
    title: "History",
    logo: RiHomeLine,
  });

  // State for toggling the sidebar
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  function HandleActivePageBtn(pageData) {
    setActivePageBtn(pageData);
    setIsSidebarVisible(false); // Hide sidebar when a new page is selected
  }

  return (
    <section className="page-layout">
      <div className="page-layout__header"></div>
      <div className="page-layout__content grid lg:grid-cols-12">
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
          className={`overlay lg:hidden fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out left-[11rem] md:left-[14rem]  ${
            isSidebarVisible ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsSidebarVisible(false)}
        ></div>

        {/* Main Content Area */}
        <div className="content-area min-h-screen sm:col-span-9 lg:col-span-10 bg-page-secondary relative ">
          {/* Toggle button for sidebar */}
          <div className="lg:hidden p-4">
            <button
              onClick={() => setIsSidebarVisible(!isSidebarVisible)}
              className="text-xl"
            >
              <RiMenuLine />
            </button>
          </div>

          {/* NavBar */}
          <div className="nav-bar">
            <NavBar activePageData={activePageBtn} />
          </div>

          {/* Main Content */}
          <div className="main-pages min-h-screen w-full">
            {activePageBtn.title === "My Projects" && <Projects />}
            {activePageBtn.title === "Chat" && <ChattingPage />}
            {activePageBtn.title === "Dashboard" && <DashBoard />}
            {activePageBtn.title === "Clients" && <Clients />}
            {activePageBtn.title === "Settings" && <Settings />}
            {activePageBtn.title === "History" && <History />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagerLayout;
