import React from "react";
import "./style.css";



const Status = () => {
  return (
    <div className="earning-section">
      <div className="earn-item first">
        <div className="icon-container">
          <img src="./assets/icons/money.png" className="item-icon" alt="Earning Icon" />
        </div>

        <div className="item-content">
          <span className="item-type">Earning</span>
          <h2 className="item-title">$198K</h2>
          <div className="item-status">
            <span className="fa fa-arrow-up status"></span>
            <span className="status">37.8%</span>
            <span className="status-day"> this month</span>
          </div>
        </div>
      </div>

      <div className="earn-item middle">
        <div className="icon-container">
        
        </div>

        <div className="item-content">
          <span className="item-type">Orders</span>
          <h2 className="item-title">$2.4K</h2>
          <div className="item-status">
          <span className="fa fa-arrow-down status"></span>
          <span className="status">2%</span>
          <span className="status-day"> this month</span>
          <div style={{ fontSize: "0.8rem", height: "0.8rem" }} />
        </div>
      </div>
      </div>

      <div className="earn-item last">
        <div className="icon-container">
          <img src="./assets/icons/wallet.png" className="item-icon" alt="Balance Icon" />
        </div>

        <div className="item-content">
          <span className="item-type">Balance</span>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h2 className="item-title">$2.4K</h2>
            <span style={{ fontSize: "0.8rem", marginLeft: "5px" }}>
              {" "}
            </span>
          </div>
          <div className="item-status">
            <span className="fa fa-arrow-down status"></span>
            <span className="status">2%</span>
            <span className="status-day"> this month</span>
          </div>
        </div>
      </div>
      <div className="earn-item middle">
        <div className="icon-container">
        <img src="./" className="item-icon" alt="Balance Icon" />
        </div>

        <div className="item-content">
          <span className="item-type">Total Sales</span>
          <h2 className="item-title">$89K</h2>
          <div className="item-status">
          <span className="fa fa-arrow-up status"></span>
          <span className="status">11%</span>
          <span className="status-day"> this month</span>
          <div style={{ fontSize: "0.8rem", height: "0.8rem" }} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Status;
