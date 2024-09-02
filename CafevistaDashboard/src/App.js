import React from "react";

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

const App = () => {
  return (
    <>
      <EmployeeLayout />
    </>
  );
};

export default App;
