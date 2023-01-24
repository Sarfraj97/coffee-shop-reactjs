import React from "react";
import { Route, Routes } from "react-router";
import Customer from "./container/Customer";
import Dashboard from "./container/Dashboard";

function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/customer" element={<Customer />} />
    </Routes>
  );
}

export default Allroutes;
