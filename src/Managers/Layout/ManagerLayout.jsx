import React, { useState } from "react";
import SideBar from "../Components/SideBar/SideBar";
import NavBar from "../Components/NavBar/NavBar";
import { RiHomeLine, RiMenuLine } from "react-icons/ri";
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
    title: "Dashboard",
    logo: RiHomeLine,
  });

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  function HandleActivePageBtn(pageData) {
    setActivePageBtn(pageData);
    setIsSidebarVisible(false);
  }

  const pages = {
    "My Projects": <Projects />,
    Chat: <ChattingPage />,
    Dashboard: <DashBoard />,
    Clients: <Clients />,
    Settings: <Settings />,
    History: <History />,
  };

  return (
    <section className="page-layout relative">
      <div className="page-layout__header"></div>
      <div className="page-layout__content grid lg:grid-cols-12 relative">
        <div className="sidebar sm:col-span-3 lg:col-span-2 hidden lg:block">
          <SideBar HandleActivePageBtn={HandleActivePageBtn} />
        </div>

        <div
          className={`fixed inset-y-0 left-0 z-40 lg:hidden transform ${
            isSidebarVisible ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out lg:relative`}
        >
          <SideBar HandleActivePageBtn={HandleActivePageBtn} />
        </div>

        <div
          className={`overlay lg:hidden fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out ${
            isSidebarVisible ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsSidebarVisible(false)}
          style={{ left: "14rem" }}
        ></div>

        <div className="content-area min-h-screen sm:col-span-9 lg:col-span-10 bg-page-secondary relative">
          <div className="lg:hidden p-4">
            <button
              onClick={() => setIsSidebarVisible(!isSidebarVisible)}
              className="text-xl"
            >
              <RiMenuLine />
            </button>
          </div>

          <div className="nav-bar">
            <NavBar activePageData={activePageBtn} />
          </div>
          <div className="main-pages min-h-screen">
            {pages[activePageBtn.title]}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagerLayout;
