import React from "react";
import Table from "./Table";
import { InvoiceTableData } from "./Utilities";
<<<<<<< HEAD
const Invoice = () => {
  return (
    <div className="h-full">
      <Table data={InvoiceTableData} />
    </div>
=======

const Invoice = () => {
  return (
    <section
      id="Requirements-page"
      className="grid w-full xl:grid-cols-2 gap-2 p-2 overflow-hidden"
    >
      {/* Wrap table in a responsive div with overflow scrolling */}
      <div className="h-full min-w-0">
        <Table data={InvoiceTableData} />
      </div>
    </section>
>>>>>>> 171c0f1 (Temporary commit to save changes)
  );
};

export default Invoice;
