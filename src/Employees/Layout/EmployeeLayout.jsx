import React from "react";
import SideBar from "../Components/SideBar/SideBar";

const EmployeeLayout = () => {
  return (
    <section className="page-layout">
      <div className="page-layout__header"></div>
      <div className="page-layout__content grid sm:grid-cols-12">
        <div className="sidebar hidden sm:col-span-3 lg:col-span-2 sm:block  ">
          <SideBar />
        </div>
        <div className="content-area sm:col-span-10"></div>
      </div>
    </section>
  );
};

export default EmployeeLayout;
