"use client";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const chartColors = {
  primary: "#355FF5",
  secondary: "#CCDAF6",
  textPrimary: "#364A63",
  textSecondary: "#8C8C8C",
  borderColor: "#C8D8F4",
};

const generateChartData = (primaryData : number[], secondaryData : number[]) => ({
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: primaryData,
      backgroundColor: chartColors.primary,
      borderColor: chartColors.primary,
      borderWidth: 3,
      fill: false,
    },
    {
      data: secondaryData,
      backgroundColor: chartColors.secondary,
      borderColor: chartColors.secondary,
      borderWidth: 3,
      borderDash: [10, 6],
      fill: false,
    },
  ],
});

const dataAllStation = generateChartData(
  [10000, 23000, 15000, 43000, 25000, 23000, 50000],
  [20000, 15000, 33000, 23000, 35000, 30000, 40000]
);

const dataACCharge = generateChartData(
  [40000, 23000, 15000, 43000, 25000, 23000, 30000],
  [12000, 15000, 33000, 23000, 35000, 30000, 40000]
);

const dataDCCharge = generateChartData(
  [20000, 23000, 15000, 43000, 25000, 23000, 30000],
  [13000, 15000, 33000, 23000, 35000, 30000, 40000]
);

const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 10000,
        callback: (value : any) => value / 1000 + "k",
      },
      grid: {
        display: false,
      },
    },
    x: {
      beginAtZero: true,
      display: true,
      grid: {
        display: false,
      },
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  plugins: {
    legend: {
      display: false,
      labels: {
        color: "#4B465C",
      },
    },
  },
};

const TotalCharge = () => {
  const [currentComponent, setCurrentComponent] = useState("All Station");

  const handleClick = (component : string) => setCurrentComponent(component);

  return (
    <div className="w-[530px] bg-white px-4 py-2 rounded-md">
      <div>
        <span className="text-[#364A63] text-[13px] mr-2 font-medium">
          Total Charge Session
        </span>
        <span className="text-[#364A63] text-[10px]">
          All Station in FastWave
        </span>
      </div>
      <div className="flex w-[170px] my-4 justify-between">
        {["All Station", "AC Charge", "DC Charge"].map((label) => (
          <button
            key={label}
            className={`text-[10px] font-light ${
              currentComponent === label &&
              "text-[#355FF5] font-medium underline decoration-2 underline-offset-4"
            }`}
            onClick={() => handleClick(label)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="w-full bg-[#C8D8F4] h-[1px]" />
      <div className="flex justify-between items-center">
        <div className="flex">
          <div className="flex flex-col justify-around items-center w-[130px] h-[120px]">
            <div className="flex flex-col justify-around items-center w-full">
              <p className="text-[#355FF5] text-[20px] font-medium">202</p>
              <p className="text-[#364A63] text-[10px]">Charge Session</p>
            </div>
            <div className="flex justify-around items-center w-full">
              <div className="flex items-center justify-center w-[80px]">
                <div className="w-[15px] h-[5px] bg-[#355FF5]" />
                <p className="text-[6px] text-[#8C8C8C] pl-1 font-light">
                  Total Charge
                </p>
              </div>
              <div className="flex items-center w-[100px]">
                <div className="flex">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-[5px] h-[5px] mx-[0.5px] bg-[#CCDAF6]"
                    />
                  ))}
                </div>
                <p className="text-[6px] text-[#8C8C8C] pl-1">
                  AVG. for the period
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1px] bg-[#C8D8F4] mx-2 h-[200px]" />
        <div className="w-[360px]">
          {currentComponent === "All Station" && (
            <Line data={dataAllStation} options={options} width={400} height={150} />
          )}
          {currentComponent === "AC Charge" && (
            <Line data={dataACCharge} options={options} width={400} height={150} />
          )}
          {currentComponent === "DC Charge" && (
            <Line data={dataDCCharge} options={options} width={400} height={150} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TotalCharge;
