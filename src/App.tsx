import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Auth/Login";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./screens/Dashobard";
import Account from "./screens/Account";
import Cart from "./screens/Cart";
import NotFound from "./screens/NotFound";

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/account" element={<Account />} />
      <Route path="/carts" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
