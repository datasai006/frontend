import React from "react";
import NAV from "../Dashboard/nav";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Footer from "../Dashboard/footer1";
const UserDashboard = () => {
  return (
    <div>
      <NAV />
      <Sidebar />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default UserDashboard;
