import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Auth/Login";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./screens/Dashobard";

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
