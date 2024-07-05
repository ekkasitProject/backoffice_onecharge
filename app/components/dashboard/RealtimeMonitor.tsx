import React from "react";

export default function RealtimeMonitor() {
  return (
    <div className="bg-white w-full h-[500px] mr-1 mt-4 p-3 rounded-md">
      <p className="text-[#364A63] text-[12px] font-medium">Revenue</p>
      <div className="w-full h-[1px] bg-[#C8D8F4] my-2" />
      <div className="flex  justify-evenly  py-2 items-center">
        <div className="relative">
          <img src="images/circle_charging.png" className="w-[100px]" alt="Charging" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <p className="text-[#364A63] text-[12px] font-medium">0.58%</p>
            <p className="text-[#364A63] text-[12px] font-medium">Charging</p>
          </div>
        </div>
        <div className="ml-4">
          <p className="text-[#364A63] text-[12px] font-medium">Member</p>
          <p className="text-[#364A63] text-[14px]">
            <span className="font-medium text-[#355FF5]">5</span>
            <span className="ml-1 font-medium text-[#364A63]"> / 3,090</span>
          </p>
          <p className="text-[#364A63] text-[10px] font-light">All Clients in Station</p>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#C8D8F4] my-2" />
      <div className="flex  justify-evenly  py-2 items-center">
        <div className="relative">
          <img src="images/circle_freetime.png" className="w-[100px]" alt="freetime" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <p className="text-[#364A63] text-[12px] font-medium">40.58%</p>
            <p className="text-[#364A63] text-[12px] font-medium">Free Time</p>
          </div>
        </div>
        <div className="ml-4">
          <p className="text-[#364A63] text-[12px] font-medium">Get in position</p>
          <p className="text-[#364A63] text-[14px]">
            <span className="font-medium text-[#355FF5]">3</span>
            <span className="ml-1 font-medium text-[#364A63]"> / 1,890</span>
          </p>
          <p className="text-[#364A63] text-[10px] font-light">All Clients in Station</p>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#C8D8F4] my-2" />
      <div className="flex  justify-evenly  py-2 items-center">
        <div className="relative">
          <img src="images/circle_offline.png" className="w-[100px]" alt="offline" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <p className="text-[#364A63] text-[12px] font-medium">9.58%</p>
            <p className="text-[#364A63] text-[12px] font-medium">Charging</p>
          </div>
        </div>
        <div className="ml-4">
          <p className="text-[#364A63] text-[12px] font-medium">Member</p>
          <p className="text-[#364A63] text-[14px]">
            <span className="font-medium text-[#355FF5]">3</span>
            <span className="ml-1 font-medium text-[#364A63]"> / 19,000</span>
          </p>
          <p className="text-[#364A63] text-[10px] font-light">All Clients in Station</p>
        </div>
      </div>
    </div>
  );
}
