import React from "react";
import { TeamData, TeamTableData } from "./Utilities";
import FormSection from "./FormSection";
import Table from "./Table";
const Teams = () => {
  return (
    <section id="Team-page" className="grid xl:grid-cols-2 gap-2 p-2">
      <div className="form-data h-full">
        <FormSection Data={TeamData} />
      </div>
      <div className="table-data h-full ">
        <Table data={TeamTableData} />
      </div>
    </section>
  );
};

export default Teams;
