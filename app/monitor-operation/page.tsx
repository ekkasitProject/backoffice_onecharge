import React from "react";
import Monitor from "../components/monitor/Monitor";
import Operation from "../components/monitor/Operation";

export default function page() {
  return (
    <div className="flex justify-between mx-4">
      <Monitor />
      <div className="w-[570px] h-[600px]  ml-[200px] mb-[70px]">
        <div className="w-full flex justify-between ">
          <div className="w-[180px] h-[70px] flex flex-col justify-center items-center bg-white rounded-md">
            <p className="text-[14px] font-semibold">321</p>
            <p className="text-[10px] text-[#EE791A] font-medium">Charging</p>
            <p className="text-[8px] text-[#909090] font-light">connector</p>
          </div>
          <div className="w-[180px] h-[70px] flex flex-col justify-center items-center bg-white rounded-md">
            <p className="text-[14px] font-semibold">1,900</p>
            <p className="text-[10px] text-[#2FAB24] font-medium">Available</p>
            <p className="text-[8px] text-[#909090] font-light">connector</p>
          </div>
          <div className="w-[180px] h-[70px] flex flex-col justify-center items-center bg-white rounded-md">
            <p className="text-[14px] font-semibold">10</p>
            <p className="text-[10px] text-[#F72D20] font-medium">Problem</p>
            <p className="text-[8px] text-[#909090] font-light">connector</p>
          </div>
        </div>
        <Operation />
        <div className="h-[75px]"/>
      </div>
      
    </div>
  );
}
