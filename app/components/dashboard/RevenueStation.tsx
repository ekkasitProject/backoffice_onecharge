import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function RevenueStation() {
  return (
    <div className="w-full  bg-white mr-1 p-3 rounded-md">
      <div className="flex justify-between items-center w-[80px] h-[50px] ">
        <img src="images/icon_revenue_wallet.png" alt="" className="w-[24px]" />
        <div>
          <p className="text-[#364A63] text-[12px] font-medium">Revenue</p>
          <p className="text-[#364A63] text-[9px] font-normal">All Station</p>
        </div>
      </div>
      <div className=" w-full h-[1px] bg-[#C8D8F4] my-2" />
      <div className="flex  flex-col justify-end items-start w-full h-[100px]">
        <p className="text-[#141414] text-[25px] font-medium">฿39,580.30</p>
        <div className="flex justify-between items-center">
          <img src="images/money_revenue.png" alt="" className="w-[24px]" />
          <p className="text-[#858585] text-[8px] font-normal">
            Total income increased from last month{" "}
          </p>
          <img src="images/icon_growup.png" alt="" className="w-[15px]" />
          <p className="text-[#25C870] text-[10px] font-normal">+15%</p>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#C8D8F4] my-2" />
      <div className="flex justify-end items-center w-full">
        <p className="text-[#355FF5] text-[10px] font-medium">
          View Station Statistic
        </p>
        <div className="w-[15px] h-[15px] bg-[#F0F0F0] ml-2 rounded-full flex justify-center items-center">
          <IoIosArrowForward className="text-[#969696] text-[10px]" />
        </div>{" "}
      </div>
    </div>
  );
}
