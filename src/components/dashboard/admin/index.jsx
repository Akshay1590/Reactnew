import React from "react";
import "./style.css";

const Admin = () => {
  const admins = [
    {
      name: "Abstract 3D",
      stock: `$32 in Stock`,
      price: 45.99,
      totalSales: 20,
    },
    {
      name: "Sarohens illustration",
      stock: `$32 in Stock`,
      price: 45.99 ,
      totalSales: 20,
    },
  ];

  return (
    <div className="admin-container">
      <div className="Ak">
        <p className="admin-title">Product Sell</p>
        <span>
          <input type="text" placeholder="Search..." />
          <button>Search</button>
          <select>
            <option value="last7days">Last 7 Days</option>
            <option value="last30days">Last 30 Days</option>
          </select>
        </span>
      </div>

      <table>
        <thead>
          <tr className="bordered">
            <th>Product</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Total Sales</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin, idx) => (
            <tr key={idx}>
              <td>
                {admin.name}
              </td>
              <td>{admin.stock}</td>
              <td>${admin.price.toFixed(2)}</td>
              <td>{admin.totalSales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
