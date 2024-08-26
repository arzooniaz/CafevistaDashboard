import React, { useState } from "react";
import SideBar from "../Components/SideBar/SideBar";
import NavBar from "../Components/NavBar/NavBar";
import { RiHomeLine } from "react-icons/ri";
import Projects from "../Components/Projects/Projects";
const EmployeeLayout = () => {
  const [activePageBtn, setActivePageBtn] = useState({
    title: "Dashboard",
    logo: RiHomeLine,
  });

  function HandleActivePageBtn(pageData) {
    setActivePageBtn(pageData);
  }
  return (
    <section className="page-layout">
      <div className="page-layout__header"></div>
      <div className="page-layout__content grid sm:grid-cols-12">
        <div className="sidebar  sm:col-span-3 lg:col-span-2 hidden sm:block ">
          <SideBar HandleActivePageBtn={HandleActivePageBtn} />
        </div>
        <div className="content-area sm:col-span-9 lg:col-span-10 bg-page-secondary">
          <div className="nav-bar">
            <NavBar activePageData={activePageBtn} />
          </div>
          <div className="main-pages">
            {activePageBtn.title === "Projects" && <Projects />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeLayout;
