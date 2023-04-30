import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import data from "../data/data";
import { Radar } from "react-chartjs-2";
import "../App.css";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartDataLabels
);

const ChartGraph = () => {
  const options = {
    // налаштування графіка
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 100, // маштаб
        pointLabels: {
          font: {
            size: 18,
          },
          callback: function (value) {
            return value;
          },
          angle: 90, //кут нахилу тексту підпису (теж не працює)
        },
        ticks: {
          display: false, // виключає числа на графіку
          stepSize: 20, // ширина між проміжками
        },
        grid: {
          color: "black",
        },
        angleLines: {
          color: "black",
        },
        angle: 90, //кут нахилу тексту підпису (теж не працює)
      },
    },
    elements: {
      // значення кривизни
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
        display: false,
        // color: "red",
      },
      // labels: {
      //   render: "value",
      //   fontColor: "black",
      //   fontSize: 18,
      //   fontStyle: "bold",
      //   shadowBlur: 10,
      //   shadowColor: "red",
      //   shadowOffsetX: 0,
      //   shadowOffsetY: 0,
      //   textShadow: true,
      //   shadowStroke: true,
      // },
    },
  };

  return (
    <div style={{ width: "700px", height: "700px" }}>
      <Radar data={data} options={options}></Radar>
    </div>
  );
};

export default ChartGraph;
