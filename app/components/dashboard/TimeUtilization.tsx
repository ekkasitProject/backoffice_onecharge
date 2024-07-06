"use client";
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { callback } from 'chart.js/helpers';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data:   [10000, 23000, 15000, 43000, 25000, 23000, 50000]      ,
      borderColor: '#FF9640',
      borderWidth: 3,
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
      ticks: {
        stepSize: 10000,
        callback: (value : any) => `${value/1000}k`,
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

function TimeUtilization() {
  return (
    <div className='w-[245px] h-full bg-white rounded-md p-4 flex flex-col'>
        <p className='text-[#364A63] text-[12px] font-medium'>Time Utilization</p>
      <div className='w-full h-[1px] bg-[#C8D8F4] my-2'/>
           
      <div className='flex-grow' style={{ width: '100%', minHeight: '120px' }}>
        <Line options={options} data={data} />
      </div>

    </div>
  );
}

export default TimeUtilization