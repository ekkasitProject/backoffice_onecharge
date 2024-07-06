"use client";
import React, { useState } from "react";

export default function Maintenance() {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxClick = (boxIndex: any) => {
    setSelectedBox(boxIndex);
  };

  const boxes = [
    { id: 0, connectorId: 1, stationName:"FastWave Station", chargerName:"AC 22kW", voltage :120 ,temperature: 93 , statusEror: true,statusCode : 5001},
    { id: 1, connectorId: 2,stationName:"CoffeeHouse", chargerName:"Ewval DC 30kW", voltage:93  ,temperature: 93 , statusEror: true ,statusCode : 5001},
    { id: 2, connectorId: 1,stationName:"Salaya Condominium", chargerName:"AIWIN AC 20kW", voltage: 302  ,temperature: 103 , statusEror: false,statusCode : 0},
  ];

  return (
    <div className=" bg-white m-4 pt-3 px-3 pb-7 rounded-md shadow-md">
      <div className="flex justify-between items-center w-full">
        <p className="text-[#364A63] text-[12px] font-medium">Maintenance</p>
        <div className="flex justify-between items-center">
          <p className="text-[#355FF5] text-[10px] font-medium">View Trouble</p>
          <img
            src="images/icon_arrow_right.png"
            className="w-[15px] h-[15px] ml-2"
            alt=""
          />
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#C8D8F4] my-2" />
      <div className="w-full flex justify-between items-center">
        {boxes.map((box) => (
          <div
            key={box.id}
            className={`w-[245px] h-[210px] p-4  shadow-lg rounded-md ${
              selectedBox === box.id ? "bg-[#1055E8]" : "bg-white"
            }`}
            onClick={() => handleBoxClick(box.id)}
          >
            {/* <p className="text-center text-[#364A63]">{box.content}</p> */}
            <div className={`w-full h-[120px]  p-2 rounded-md ${selectedBox === box.id ? "bg-white" : "bg-[#F4F6FA]"}`}>
              <div className="w-[95px] flex justify-between items-center">
                <div className=" px-3 py-1 bg-[#FFE4D8] rounded-md">
                  <p className="text-[#BC3A00] text-[7px]">Overheat</p>
                </div>
                <div className=" px-2 py-1 bg-[#F72D20] rounded-md">
                  <p className="text-white text-[7px]">Offline</p>
                </div>
              </div>
              <div className="w-full flex justify-between my-2">
                <div className={`w-[50px] h-[50px]  flex items-center justify-center rounded-md ${selectedBox === box.id ? "bg-[#F2F2F2]" : "bg-white"}`}>
                  <img
                    src="images/thunder.png"
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                </div>

                <div className={`w-[50px] h-[50px] flex items-center justify-center rounded-md ${selectedBox === box.id ? "bg-[#F2F2F2]" : "bg-white"}`}>
                  <img
                    src="images/plug_in.png"
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                </div>
                <div className={`w-[50px] h-[50px]  flex items-center justify-center rounded-md ${selectedBox === box.id ? "bg-[#F2F2F2]" : "bg-white"}`}>
                  <img
                    src={`images/${box.statusEror === true ? "message" : 'message_disable'}.png`}
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                </div>
              </div>
              <div className="w-full flex justify-between items-center ">
                <div className="w-[50px] flex flex-col justify-center items-center">
                  <p className="text-[#2E2E2E] text-[9px]">{box.voltage}</p>
                  <p className="text-[#757575] text-[6px]">Voltage</p>
                </div>
                <div className="w-[50px] flex flex-col justify-center items-center">
                  <p className="text-[#2E2E2E] text-[9px]">{box.temperature} &deg;c</p>
                  <p className="text-[#757575] text-[6px]">Temperature gun</p>
                </div>
                <div className="w-[50px] flex flex-col justify-center items-center">
                  <p className="text-[#2E2E2E] text-[9px]">{box.statusCode == 0 ? "-": box.statusCode}</p>
                  <p className="text-[#757575] text-[6px]">Error</p>
                </div>
              </div>
            </div>
            <div className="w-full mt-1 ">
                <div className="w-full flex justify-between items-center">
                    <p className={`text-[7px] font-extralight ${selectedBox === box.id ? "text-white" : "text-[#2E2E2E]"}`}>Charging Station</p>
                    <p className={`text-[7px] font-extralight ${selectedBox === box.id ? "text-white" : "text-[#2E2E2E]"}`}>Connector {box.connectorId}</p>
                </div>
                <div className="w-full flex justify-between items-center">
                <p className={`text-[9px] ${selectedBox === box.id ? "text-white" : "text-[#2E2E2E]"}`}>{box.stationName}</p>
                <p className={`text-[9px] ${selectedBox === box.id ? "text-white" : "text-[#2E2E2E]"}`}>{box.chargerName}</p>
                </div>
                <div className={`w-full h-[1px] mt-1 ${selectedBox === box.id ? "bg-white" : "bg-[#C8D8F4]"}`}/>
                <div className="w-full flex justify-end items-center mt-2">
                    <img src={`images/${selectedBox === box.id ? "restart_charger" : "restart_disable"}.png`} alt="" className="w-[20px] h-[20px] " />
                    <img src={`images/${selectedBox === box.id ? "stop_charger" : "stop_disable"}.png`} alt="" className="w-[20px] h-[20px] ml-1" />
                    <img src="images/start_charger.png" alt="" className="w-[20px] h-[20px] ml-1" />
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
