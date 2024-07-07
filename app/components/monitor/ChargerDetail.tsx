import React from "react";

export default function ChargerDetail() {
  return (
    <div className="w-full h-[120px] ">
      <div className="w-full flex justify-between my-2">
        <div
          className={`w-[40px] h-[40px]  flex items-center justify-center rounded-md bg-white`}
        >
          <img src="/images/thunder.png" alt="" className="w-[20px] h-[20px]" />
        </div>

        <div
          className={`w-[40px] h-[40px] flex items-center justify-center rounded-md bg-white`}
        >
          <img src="/images/plug_in.png" alt="" className="w-[20px] h-[20px]" />
        </div>
        <div
          className={`w-[40px] h-[40px]  flex items-center justify-center rounded-md bg-white`}
        >
          <img
            src="/images/message_disable.png"
            alt=""
            className="w-[20px] h-[20px]"
          />
        </div>
        <div
          className={`w-[40px] h-[40px]  flex items-center justify-center rounded-md bg-white`}
        >
          <img
            src="/images/message_disable.png"
            alt=""
            className="w-[20px] h-[20px]"
          />
        </div>
        <div
          className={`w-[40px] h-[40px]  flex items-center justify-center rounded-md bg-white`}
        >
          <img
            src="/images/message_disable.png"
            alt=""
            className="w-[20px] h-[20px]"
          />
        </div>
       
      </div>
      <div className="w-full flex justify-between items-center ">
                <div className="w-[40px] flex flex-col justify-center items-center">
                  <p className="text-[#2E2E2E] text-[9px]">299kW</p>
                  <p className="text-[#757575] text-[5px]">Voltage</p>
                </div>
                <div className="w-[40px] flex flex-col justify-center items-center">
                  <p className="text-[#2E2E2E] text-[9px]">93&deg;c</p>
                  <p className="text-[#757575] text-[5px]">Temperature gun</p>
                </div>
                <div className="w-[40px] flex flex-col justify-center items-center">
                  <p className="text-[#2E2E2E] text-[9px]">-</p>
                  <p className="text-[#757575] text-[5px]">Error</p>
                </div>
                <div className="w-[40px] flex flex-col justify-center items-center">
                  <p className="text-[#2E2E2E] text-[9px]">-</p>
                  <p className="text-[#757575] text-[5px]">Error</p>
                </div>
                <div className="w-[40px] flex flex-col justify-center items-center">
                  <p className="text-[#2E2E2E] text-[9px]">-</p>
                  <p className="text-[#757575] text-[5px]">Error</p>
                </div>
                
              </div>
    </div>
  );
}
