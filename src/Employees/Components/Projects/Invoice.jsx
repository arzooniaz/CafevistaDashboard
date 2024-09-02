import React from "react";
import Table from "./Table";
import { InvoiceTableData } from "./Utilities";
const Invoice = () => {
  return (
    <div className="h-full">
      <Table data={InvoiceTableData} />
    </div>
  );
};

export default Invoice;
