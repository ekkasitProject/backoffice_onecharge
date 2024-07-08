"use client";
import ChargerDetail from "@/app/components/monitor/ChargerDetail";
import Configuration from "@/app/components/monitor/Configuration";
import Connector from "@/app/components/monitor/Connector";
import Service from "@/app/components/monitor/Service";
import React, { useState } from "react";
import { FiClock } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

export default function page() {
  const [currentComponent, setCurrentComponent] = useState("ChargerDetail");

  const handleClick = (component: string) => setCurrentComponent(component);

  return (
    <div className="w-[780px]  mx-4 mb-[70px] bg-white p-3 rounded-md">
      <div className="w-full flex justify-between items-center">
        <div className="w-[100px] flex items-center">
          <img src="/images/icon_arrow_back.png" alt="" className="w-[15px]" />
          <p className="text-[#364A63] text-[10px] font-medium ml-2">
            Ewval DC 160kW
          </p>
        </div>
        <div className="w-[160px] flex justify-between items-center">
          <p className="text-[#757575] text-[8px] font-medium">
            Charging Stations at
          </p>
          <div className="flex justify-between items-center">
            <img src="/images/mark_station.png" alt="" className="w-[15px]" />
            <p className="text-[#355FF5] text-[8px] font-medium ">
              CPAC LCD Co.,LTD
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#E0E0E0] my-2" />
      <div className="w-full  flex justify-between items-center ">
        <div className="w-[450px] bg-[#F4F6FA] p-3 rounded-md">
          <div className="w-[300px] flex justify-between items-center ">
            <button
              className={` px-3 py-1 ${
                currentComponent === "ChargerDetail"
                  ? "bg-[#355FF5]"
                  : "bg-white"
              } rounded-md`}
              onClick={() => handleClick("ChargerDetail")}
            >
              <p
                className={` text-[10px] font-light ${
                  currentComponent === "ChargerDetail"
                    ? "text-white"
                    : "text-[#505050]"
                }`}
              >
                Charger
              </p>
            </button>
            <button
              className={` px-3 py-1 ${
                currentComponent === "Configuration"
                  ? "bg-[#355FF5]"
                  : "bg-white"
              } rounded-md`}
              onClick={() => handleClick("Configuration")}
            >
              <p
                className={` text-[10px] font-light ${
                  currentComponent === "Configuration"
                    ? "text-white"
                    : "text-[#505050]"
                }`}
              >
                Configuration
              </p>
            </button>
            <button
              className={` px-3 py-1 ${
                currentComponent === "Connector" ? "bg-[#355FF5]" : "bg-white"
              } rounded-md`}
              onClick={() => handleClick("Connector")}
            >
              <p
                className={` text-[10px] font-light ${
                  currentComponent === "Connector"
                    ? "text-white"
                    : "text-[#505050]"
                }`}
              >
                Connector
              </p>
            </button>
            <button
              className={` px-3 py-1 ${
                currentComponent === "Service" ? "bg-[#355FF5]" : "bg-white"
              } rounded-md`}
              onClick={() => handleClick("Service")}
            >
              <p
                className={` text-[10px] font-light ${
                  currentComponent === "Service"
                    ? "text-white"
                    : "text-[#505050]"
                }`}
              >
                Service
              </p>
            </button>
          </div>
          <div className="w-full h-[1px] bg-[#E0E0E0] my-2" />

          <div className="w-full flex justify-between">
            <div className=" flex justify-center items-center">
              <img src="/images/charger.png" alt="" className="w-[120px]" />
            </div>
            <div className="w-[280px] flex  flex-col justify-start ">
              <div className="w-[130px] h-[35px] flex justify-between items-start">
                <div className="">
                  <p className="text-[#505050] text-[10px] font-medium">
                    Ewval DC 160kW
                  </p>
                  <p className="text-[#999999] text-[8px] font-medium">
                    Connector 1
                  </p>
                </div>
                <div className="flex justify-center items-center bg-[#2FAB24] px-2 py-[3px] rounded-md">
                  <p className="text-white text-[7px] font-medium">Available</p>
                </div>
              </div>
              {currentComponent === "ChargerDetail" && <ChargerDetail />}
              {currentComponent === "Configuration" && <Configuration />}
              {currentComponent === "Connector" && <Connector />}
              {currentComponent === "Service" && <Service />}
            </div>
          </div>
        </div>
        <div className="w-[290px] h-[223.63px] flex justify-center items-center p-2 bg-[#F4F6FA] rounded-md">
          <img
            src="/images/map_view_charger.png"
            alt=""
            className="rounded-md"
          />
        </div>
      </div>
      <div className="w-full  bg-[#F4F6FA] my-2 p-3 rounded-md">
        <p className="text-[#757575] text-[10px] font-medium">Charge Session</p>
        <div className="w-full h-[1px] bg-[#E0E0E0] my-2" />
        <div className="w-full flex justify-between items-center">
          <div className="w-[170px] h-[200px]  ">
            <div className="w-[120px] h-[30px] flex justify-between items-center px-3  py-1 bg-white rounded-md">
              <div className="flex justify-center items-center">
                <FiClock className="text-[#8A8A8A] text-[12px]" />
                <p className="text-[10px] text-[#8A8A8A] font-medium ml-1">
                  7 days
                </p>
              </div>
              <div className="p-[2px] bg-[#F0F0F0] rounded-full">
                <IoIosArrowDown className="text-[#969696] text-[10px]" />
              </div>
            </div>
            <div className="w-full h-[120px]  flex  flex-col justify-center items-center">
              <p className="text-[20px] text-[#355FF5] font-bold">11,940</p>
              <p className="text-[10px] text-[#364A63] font-light ">
                Charge Session
              </p>
            </div>
            <div className="w-full h-[50px] flex justify-between items-center">
              <div className="flex justify-center items-center">
                <div className="w-[12px] h-[5px] bg-[#355FF5]"></div>
                <p className="text-[8px] text-[#8C8C8C] font-light ml-[1px]">Total Charge</p>
              </div>
               <div className="flex justify-center items-center">
                <div className="w-[4px] h-[5px] bg-[#CCDAF6] mx-[1px]"></div>
                <div className="w-[4px] h-[5px] bg-[#CCDAF6] mx-[1px]"></div>
                <div className="w-[4px] h-[5px] bg-[#CCDAF6] mx-[1px]"></div>
                <p className="text-[8px] text-[#8C8C8C] font-light ml-[1px]">AVG. for the period</p>
              </div>
            </div>
          </div>
          <div className="w-[1px] h-[180px] bg-[#C8D8F4]"></div>
          <div className="w-[550px] h-[200px] flex justify-between "></div>
        </div>
      </div>
    </div>
  );
}
