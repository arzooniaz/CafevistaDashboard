import React from "react";
import EmployeeLayout from "./Employees/Layout/EmployeeLayout";
import ManagerLayout from "./Managers/Layout/ManagerLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { RegisterUser, History } from "./Managers/Layout/Imports";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/reg" element={<RegisterUser />} />
          <Route path="/" element={<ManagerLayout />} />
          <Route path="/EmployeeSide" element={<EmployeeLayout />} />
          <Route path="/hist" element={<History />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
