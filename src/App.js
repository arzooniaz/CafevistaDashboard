import React from "react";
import EmployeeLayout from "./Employees/Layout/EmployeeLayout";
import ManagerLayout from "./Managers/Layout/ManagerLayout";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./AuthContext";

const App = () => {
  return (
    <>
      <EmployeeLayout />
      {/* <ManagerLayout /> */}
    </>
  );
};

export default App;