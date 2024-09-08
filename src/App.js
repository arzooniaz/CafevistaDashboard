import React from "react";
<<<<<<< HEAD

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";

import {
  EmployeeLayout,
  Chats,
  DashBoard,
  Logout,
  Pricing,
  Projects,
  Settings,
  Team,
} from "./Imports";
=======
import EmployeeLayout from "./Employees/Layout/EmployeeLayout";
import ManagerLayout from "./Managers/Layout/ManagerLayout";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./AuthContext";
>>>>>>> 171c0f1 (Temporary commit to save changes)

const App = () => {
  return (
    <>
<<<<<<< HEAD
      <EmployeeLayout />
=======
      {/* <EmployeeLayout /> */}
      <ManagerLayout />
>>>>>>> 171c0f1 (Temporary commit to save changes)
    </>
  );
};

export default App;
