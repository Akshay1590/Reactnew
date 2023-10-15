import React from "react";
import Status from "./status";
import Overview from "./overview";
import Payment from "./payment";
import Admin from "./admin";
import "./style.css";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="top-bar">
        <h2 style={{ marginLeft: "20px" }}>Hello Shahrukh</h2>
      </div>
      <Status />
      <div className="overview-section">
        <Overview />
        <Payment />
        <Admin />
      </div>
    </div>
  );
};

export default Dashboard;
