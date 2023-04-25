<!-- import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import "../App.css";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const ChartGraph = () => {
  const data = {
    labels: [
      "Transmission",
      "Stuffines",
      "Discomfort",
      "Humidity",
      "Polution",
      "Temperature",
      "CO2",
      "Density",
    ],
    datasets: [
      {
        label: "Dataset 3",
        backgroundColor: "rgba(149,162,230, 0.9)",
        borderColor: "rgb(174, 181, 229)",
        borderWidth: 0,
        data: [40, 14, 20, 40, 15, 20, 36, 50],
      },
      {
        label: "Dataset 1",
        backgroundColor: "rgba(174, 181, 229, 0.6)",
        borderWidth: 0,
        data: [70, 24, 50, 50, 28, 50, 46, 35],
      },
      {
        label: "Dataset 2",
        backgroundColor: "rgba(230,217,149)",
        borderWidth: 0,
        data: [28, 28, 28, 28, 28, 28, 28, 28],
      },
      {
        label: "X-3",
        backgroundColor: "rgba(191,144,0, 0.1)",
        borderWidth: 0,
        data: [40, 40, 40, 40, 40, 40, 40, 40], // Значення для заповнення проміжного простору
      },
      {
        label: "X-2",
        backgroundColor: "rgba(241,194,50, 0.1)",
        borderWidth: 0,
        data: [60, 60, 60, 60, 60, 60, 60, 60], // Значення для заповнення проміжного простору
      },
      {
        label: "X-1",
        backgroundColor: "rgba(128,128,128, 0.1)",
        borderWidth: 0,
        data: [80, 80, 80, 80, 80, 80, 80, 80], // Значення для заповнення проміжного простору
      },
    ],
  };

  const options = {
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 100,
        pointLabels: {
          font: {
            size: 18,
          },
          callback: function (value) {
            return value;
          },
        },
        ticks: {
          display: false,
          stepSize: 20,
          callback: function (value, index, values) {
            if (value === 0) return "";
            return value;
          },
        },
        grid: {
          color: "black",
        },
        angleLines: {
          color: "black",
        },
        angle: 90,
      },
    },
    elements: {
      line: {
        tension: 0,
      },
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        rotation: 0,
      },
    },
  };
  return (
    <div style={{ width: "700px", height: "700px" }}>
      <Radar data={data} options={options}></Radar>
    </div>
  );
};

export default ChartGraph; -->
