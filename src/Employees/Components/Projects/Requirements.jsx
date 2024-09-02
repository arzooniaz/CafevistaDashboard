import React from "react";
import { RequirementsData, RequirementsTableData } from "./Utilities";
import FormSection from "./FormSection";
import Table from "./Table";
const Requirements = () => {
  return (
    <section id="Requirements-page" className="grid  xl:grid-cols-2 gap-2 p-2">
      <div className="form-data h-full">
        <FormSection Data={RequirementsData} />
      </div>
      <div className="table-data h-full ">
        <Table data={RequirementsTableData} />
      </div>
    </section>
  );
};

export default Requirements;
