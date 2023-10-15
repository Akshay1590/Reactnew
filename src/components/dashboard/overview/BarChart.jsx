import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js";
import { Title, Tooltip, Legend } from "chart.js";
import { BarElement, CategoryScale, LinearScale } from "chart.js/auto";

Chart.register(Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

export const options = {
  maintainAspectRatio: false,
  aspectRatio: 1,
  barBorderRadius: 5,
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
  scales: {
    y: {
      display: false,
      beginAtZero: false,
      ticks: {
        min: 100,
      },
      grid: {
        display: false,
      },
    },
    x: {
      ticks: {
        font: {
          family: "Poppins, sans-serif",
        },
      },
      grid: {
        display: false,
      },
    },
  }
};

export function BarChart() {
  const thickness = 46; // Increase the bar thickness further

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const datas = [100, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];

  const data = {
    labels,
    datasets: [
      {
        label: "Quantity", // Change the label to "Quantity"
        data: datas,
        backgroundColor: "#F2EFFF",
        barThickness: thickness, // Increase the bar thickness to 40
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
