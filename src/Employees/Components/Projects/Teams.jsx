import React from "react";
import { TeamData, TeamTableData } from "./Utilities";
import FormSection from "./FormSection";
import Table from "./Table";
<<<<<<< HEAD
const Teams = () => {
  return (
    <section id="Team-page" className="grid xl:grid-cols-2 gap-2 p-2">
      <div className="form-data h-full">
        <FormSection Data={TeamData} />
      </div>
      <div className="table-data h-full ">
=======

const Teams = () => {
  return (
    <section
      id="Team-page"
      className="grid xl:grid-cols-2 gap-2 p-2 w-full overflow-hidden"
    >
      {/* Ensure form section does not cause overflow */}
      <div className="form-data h-full min-w-0">
        <FormSection Data={TeamData} />
      </div>

      {/* Ensure table section does not cause overflow */}
      <div className="table-data h-full min-w-0">
>>>>>>> 171c0f1 (Temporary commit to save changes)
        <Table data={TeamTableData} />
      </div>
    </section>
  );
};

export default Teams;
