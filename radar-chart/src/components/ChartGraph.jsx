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
import data from "../data/data";
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
      // обертання відображення даних (не працєю)
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

export default ChartGraph;
