import React, { useState } from "react";
import SideBar from "../Components/SideBar/SideBar";
import NavBar from "../Components/NavBar/NavBar";
import { RiHomeLine } from "react-icons/ri";
const EmployeeLayout = () => {
  const [activePageBtn, setActivePageBtn] = useState({
    title: "Dashboard",
    logo: RiHomeLine,
  });
  return (
    <section className="page-layout">
      <div className="page-layout__header"></div>
      <div className="page-layout__content grid sm:grid-cols-12">
        <div className="sidebar  sm:col-span-3 lg:col-span-2 hidden sm:block ">
          <SideBar />
        </div>
        <div className="content-area sm:col-span-9 lg:col-span-10 bg-page-secondary">
          <NavBar activePageData={activePageBtn} />
        </div>
      </div>
    </section>
  );
};

export default EmployeeLayout;
