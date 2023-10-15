import React from "react";
import PieChart from "./PieChart";
import "./style.css";

const Payment = () => {
  const data= [
    {label: 'Online', value: null},
    {label: 'Cash', value: null},
    {label: 'Cheque', value: null}
  ]

  const className = ["first", "second", "third"];

  return (
    <div className="payment-container">
      <p className="payment-title">Customers</p>
      <p className="payment-subtitle">
        Customers that buy products
      </p>
      <div className="circled-chart">
        <div className="circled-chart-img">
          <PieChart data={data} />
        </div>
        <div className="chart-state">
          {data.map((item, idx) => (
            <div className={`state-item ${className[idx]}`} key={idx}>
              <p className="item-description">
                <span className="fa fa-circle"></span>
                {item.label}
              </p>
              <p className="item-value">{item.value}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Payment;
