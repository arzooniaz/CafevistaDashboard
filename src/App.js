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
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<EmployeeLayout />} />
            <Route path="/Chats" element={<Chats />} />
            <Route path="/DashBoard" element={<DashBoard />} />
            <Route path="/Logout" element={<Logout />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Settings" element={<Settings />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
