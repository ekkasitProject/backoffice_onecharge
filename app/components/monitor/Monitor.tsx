import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";

const FilterButton = ({ label }: { label: string }) => {
  return (
    <div className="w-[90px] flex justify-center items-center bg-[#ECF2F8] px-3 py-1 border-[1px] border-[#D9D8DF] rounded-md">
      <p className="text-[#A1B1D1] text-[7px] font-light ">{label}</p>
      <MdKeyboardArrowDown className="text-[#A1B1D1] text-[7px] font-light " />
    </div>
  );
};


export default function Monitor() {
  return (
    <div className="w-[210px] h-[400px] fixed bg-white rounded-md p-3">
      <p className="text-[#364A63] text-[12px] font-medium ">Monitor</p>
      <div className="w-full h-[1px] bg-[#E0E0E0]  my-2" />
      <div className="w-full flex justify-between items-center bg-[#ECF2F8] px-2 py-1  border-[1px] border-[#D9D8DF] rounded-md ">
        <input
          type="text"
          className="w-[150px] bg-transparent text-[8px] font-light text-[#A1B1D1] focus:outline-none"
          placeholder="Search by Connector"
        />
        <img
          src="images/icon_search.png"
          alt=""
          className="w-[10px] h-[10px] ml-2"
        />
      </div>
      <div className="w-full h-[1px] bg-[#E0E0E0]  my-2" />
      <div className="w-full">
        <div className="flex justify-between">
          <FilterButton label="Filter : Type" />
          <FilterButton label="Filter : Province" />
        </div>
      </div>
      <div className="w-full mt-2">
        <div className="flex justify-between">
          <FilterButton label="Filter : Status" />
          <FilterButton label="Filter : Connector" />
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#E0E0E0]  my-2" />
      <div className="w-full flex justify-end">
        <div className="flex justify-around items-center w-[70px] px-2 py-1 h-[20px] bg-[#355FF5] rounded-md">
        <IoSearchSharp className="text-white text-[8px]  " />
          <p className="text-white text-[8px] font-light uppercase">Search</p>
        </div>
      </div>
    </div>
  );
}
