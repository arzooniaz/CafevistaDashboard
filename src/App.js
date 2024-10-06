import React from "react";
import EmployeeLayout from "./Employees/Layout/EmployeeLayout";
import ManagerLayout from "./Managers/Layout/ManagerLayout";
import Main from "./Admin/Components/Overview/Main.jsx";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./AuthContext";

const App = () => {
  return (
    <>
      {/* <EmployeeLayout /> */}
      {/* <ManagerLayout /> */}
      <Main/>
    </>
  );
};

export default App;