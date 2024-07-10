import React from 'react'

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const data = {
    labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    datasets: [
      {
        data: [80, 40, 75, 20, 35, 60, 85, 40, 60, 30, 75, 100],
        backgroundColor: (context : any) => {
          return context.dataIndex === 11 ? '#355FF5' : '#B0E2FF';
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      
    },
    scales: {
      y: {
        display: false,
        grid: {
          display: false,
        },
        
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6E82A5',
          font: {
            size: 7
          }
        },
      },
    },
  };
export default function Overview() {
  return (
    <div className="w-full flex mt-4 h-[250px] bg-white">
    <div className="w-[50%] h-full  p-3 flex flex-col">
    <div className='w-full h-[140px]'>
        <p className='text-[#364A63] text-[10px] font-normal'>Total energy consumption (kWh)</p>
        <p className='text-[#6E82A5] text-[10px] font-normal'>during 30 days</p>
        <div className='w-[210px] h-[50px] flex justify-between items-center'>
            <div className='w-[100px] flex justify-between items-center h-[50px]'>
                <div>
                    <p className='text-[#364A63] text-[14px] font-bold'>42,125</p>
                    <p className='text-[#6E82A5] text-[8px] font-normal'>last month</p>
                </div>
                <div className='flex justify-between items-center'>
                <BsArrowDown className='text-[#FF0000]' />
                <span className='text-[#FF0000] text-[8px] font-normal'>16.93 %</span>
                </div>
            </div>
            <div className='w-[100px] flex justify-between items-center h-[50px]'>
                <div>
                    <p className='text-[#364A63] text-[14px] font-bold'>7,299.59</p>
                    <p className='text-[#6E82A5] text-[8px] font-light'>last week</p>
                </div>
                <div className='flex justify-between items-center'>
                <BsArrowUp className='text-[#00D322]' />
                <span className='text-[#00D322] text-[8px] font-light'>4.26 %</span>
                </div>
            </div>
        </div>
        <div className='w-full h-full '>
            <Bar data={data} options={options} />
        </div>
    </div>

    </div>
    <div className="w-[50%] h-full">
      <div className="w-full h-[50%] bg-red-200"></div>
      <div className="w-full h-[50%] bg-red-100"></div>
    </div>
  </div>
  )
}
