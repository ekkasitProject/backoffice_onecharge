import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function ViewStaionMap() {
  return (
    <div className="flex flex-col justify-around items-center w-[240px] p-2  bg-white rounded-md">
      <img src="images/map_station.png" className="px-2" alt="" />
      <div className="w-full bg-[#C8D8F4] h-[1px] my-2" />
      <div className="flex justify-end items-center w-full">
        <p className="text-[#355FF5] text-[10px] font-medium">
          View Station Map
        </p>
        <div className="w-[15px] h-[15px] bg-[#F0F0F0] ml-2 rounded-full flex justify-center items-center">
          <IoIosArrowForward className="text-[#969696] text-[10px]" />
        </div>
      </div>
    </div>
  );
}
