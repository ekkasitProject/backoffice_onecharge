import React from "react";

export default function Service() {
  return (
    <div className="w-full h-[120px] ">
      <div className="w-full h-[1px] bg-[#E0E0E0] my-2" />
      <div className="w-[150px] flex justify-between">
        <p className="text-[9px] text-[#7B7B7B] font-light">Property</p>
        <p className="text-[9px] text-[#7B7B7B] font-light">Value</p>
      </div>
      <div className="w-full h-[1px] bg-[#E0E0E0] my-2" />
      <div className="w-[295px] flex justify-between">
        <p className="text-[9px] text-[#7B7B7B] font-light">Session activation method</p>
        <div className="w-[170px] flex justify-between">
          <button className={` px-2 py-[2px] rounded-md bg-[#355FF5]`}>
            <p
              className={`text-[8px] text-white font-extralight`} >
              Public charging enabled
            </p>
          </button>
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#E0E0E0] my-2" />
    </div>
  );
}
