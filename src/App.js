import React from "react";
import EmployeeLayout from "./Employees/Layout/EmployeeLayout";
import ManagerLayout from "./Managers/Layout/ManagerLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { RegisterUser, History } from "./Managers/Layout/Imports";
import CreateNewProjectPage from "./Employees/Components/Projects/CreateNewProject/CreateNewProjectPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/reg" element={<RegisterUser />} />
          <Route path="/ManagerSide" element={<ManagerLayout />} />
          <Route path="/emp" element={<EmployeeLayout />} />
          <Route path="/hist" element={<History />} />
          <Route path="/" element={<CreateNewProjectPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
