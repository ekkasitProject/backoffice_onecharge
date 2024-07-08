import React, { useState } from 'react'

export default function Connector() {
    const [value, setValue] = useState(true);

    const handleClick = () => setValue(!value);
  return (
    <div className="w-full h-[120px] ">
      <div className="w-full h-[1px] bg-[#E0E0E0] my-2" />
      <div className="w-[150px] flex justify-between">
        <p className="text-[9px] text-[#7B7B7B] font-light">Property</p>
        <p className="text-[9px] text-[#7B7B7B] font-light">Value</p>
      </div>
      <div className="w-full h-[1px] bg-[#E0E0E0] my-2" />
      <div className="w-[210px] flex justify-between">
        <p className="text-[9px] text-[#7B7B7B] font-light">Cable Lock</p>
        <div className="w-[85px] flex justify-between">
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
              Locked
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
              Unlock
            </p>
          </button>
        </div>
      </div>
     
      <div className="w-full h-[1px] bg-[#E0E0E0] my-2" />
    </div>
  )
}
