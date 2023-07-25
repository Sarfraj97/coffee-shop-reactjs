import React from "react";
import { Route, Routes } from "react-router";
import Customer from "./container/Customer";
import Dashboard from "./container/Dashboard";
import CustomerDetail from "./container/CustomerDetail";

function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/customer" element={<Customer />} />
      <Route path="/customer/:id" element={<CustomerDetail />} />
    </Routes>
  );
}

export default Allroutes;
