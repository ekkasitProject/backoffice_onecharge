import React, { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

export default function Configuration() {
  const [value, setValue] = useState(true);
  const [number, setNumber] = useState(100);

  const handleClick = () => setValue(!value);

  const increment = () => {
    if (number < 100) {
      setNumber(number + 1);
    }
  }

  const decrement = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  }

  return (
    <div className="w-full h-[120px] ">
      <div className="w-full h-[1px] bg-[#E0E0E0] my-2" />
      <div className="w-[125px] flex justify-between">
        <p className="text-[10px] text-[#7B7B7B]">Property</p>
        <p className="text-[10px] text-[#7B7B7B]">Value</p>
      </div>
      <div className="w-full h-[1px] bg-[#E0E0E0] my-2" />
      <div className="w-[200px] flex justify-between">
        <p className="text-[10px] text-[#7B7B7B]">Availability</p>
        <div className="w-[100px] flex justify-between">
          <button
            className={` px-2 py-[2px] rounded-md ${
              value ? "bg-[#355FF5]" : "bg-[#EBEBEB]"
            }`}
            onClick={handleClick}
          >
            <p
              className={`text-[8px] ${
                value ? "text-white" : "text-[#7B7B7B]"
              }`}
            >
              Available
            </p>
          </button>
          <button
            className={` px-2 py-[2px] rounded-md ${
              value ? "bg-[#EBEBEB]" : "bg-[#355FF5]"
            }`}
            onClick={handleClick}
          >
            <p
              className={`text-[8px] ${
                value ? "text-[#7B7B7B]" : "text-white"
              }`}
            >
              Disable
            </p>
          </button>
        </div>
      </div>
      <div className="w-[160px] flex justify-between mt-2">
        <p className="text-[10px] text-[#7B7B7B]">Availability</p>
        <div className="w-[60px] flex justify-between items-center">
          <CiCirclePlus className="text-[#5B88E4] " onClick={increment} />
          <p className="text-[8px] text-[#7B7B7B] font-light"> {number}%</p>
          <CiCircleMinus className="text-[#5B88E4] "  onClick={decrement}/>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#E0E0E0] my-2" />
    </div>
  );
}
