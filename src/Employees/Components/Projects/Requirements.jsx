import React from "react";
import { RequirementsData, RequirementsTableData } from "./Utilities";
import FormSection from "./FormSection";
import Table from "./Table";
<<<<<<< HEAD
const Requirements = () => {
  return (
    <section id="Requirements-page" className="grid  xl:grid-cols-2 gap-2 p-2">
      <div className="form-data h-full">
        <FormSection Data={RequirementsData} />
      </div>
      <div className="table-data h-full ">
=======

const Requirements = () => {
  return (
    <section
      id="Requirements-page"
      className="grid w-full xl:grid-cols-2 gap-2 p-2 overflow-hidden"
    >
      {/* Ensure the form and table sections don't overflow */}
      <div className="form-data h-full min-w-0">
        <FormSection Data={RequirementsData} />
      </div>
      <div className="table-data h-full min-w-0">
>>>>>>> 171c0f1 (Temporary commit to save changes)
        <Table data={RequirementsTableData} />
      </div>
    </section>
  );
};

export default Requirements;
