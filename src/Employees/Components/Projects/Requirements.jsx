import React from "react";
import { RequirementsData, RequirementsTableData } from "./Utilities";
import FormSection from "./FormSection";
import Table from "./Table";

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
        <Table data={RequirementsTableData} />
      </div>
    </section>
  );
};

export default Requirements;