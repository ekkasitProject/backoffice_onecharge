"use client";
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['00:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00'],
  datasets: [
    {
      data: [0, 75, 80, 40, 60, 74, 90],
      borderColor: '#77A5FF',
      borderWidth: 3,
      fill: false,
    },
    {
      data: [80, 40, 60, 74, 90, 80, 100],
      borderColor: '#FF9640',
      borderWidth: 3,
      borderDash: [5, 5],
      fill: false,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      labels: {
        color: "#4B465C",
      },
    },
    title: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    y: {
      min: 0,
      max: 120,
      ticks: {
        stepSize: 20,
        color: '#4B465C',
        font: {
          size: 10
        }
      },
      grid: {
        display: false,
      },
    },
    x: {
      beginAtZero: true,
      display: true,
      ticks: {
        color: '#4B465C',
        font: {
          size: 10
        }
      },
      grid: {
        display: false,
      },
    },
  },
};

function ChargingTrend() {
  return (
    <div className='w-[245px] h-full bg-white rounded-md p-4 flex flex-col'>
      <div className='flex justify-between items-center'>
        <p className='text-[#364A63] text-[12px] font-medium'>Charging Trend</p>
        <p className='text-[#364A63] text-[10px] font-light'>48 hours ago</p>
      </div>
      <div className='w-full h-[1px] bg-[#C8D8F4] my-2'/>
      <div className='flex justify-around items-center'>
        <div className='flex items-center'>
          <div className="w-[15px] h-[5px] bg-[#77A5FF]" />
          <p className='text-[#8C8C8C] text-[8px] font-medium mx-1'>Power of the day</p>
        </div>
        <div className='flex items-center'>
          <div className="w-[5px] h-[5px] bg-[#FF9640] mx-[0.5px]" />
          <div className="w-[5px] h-[5px] bg-[#FF9640] mx-[0.5px]" />
          <div className="w-[5px] h-[5px] bg-[#FF9640] mx-[0.5px]" />
          <p className='text-[#8C8C8C] text-[8px] font-medium mx-1'>Yesterday's electrically</p>
        </div>
      </div>
      
      <div className='flex-grow' style={{ width: '100%', minHeight: '120px' }}>
        <Line options={options} data={data} />
      </div>

    </div>
  );
}

export default ChargingTrend;