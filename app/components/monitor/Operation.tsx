"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const data = [
  {
    id: 1,
    name: "CPAC LCD Co., LTD",
    status: "Available",
    voltage: "299kW",
    temperature: "93°C",
    error: "-",
    overheat: false,
  },
  {
    id: 2,
    name: "Company B",
    status: "Available",
    voltage: "150kW",
    temperature: "85°C",
    error: "Overload",
    overheat: false,
  },
  {
    id: 3,
    name: "Company C",
    status: "Available",
    voltage: "200kW",
    temperature: "90°C",
    error: "-",
    overheat: false,
  },
  {
    id: 4,
    name: "Company C",
    status: "Prepare",
    voltage: "200kW",
    temperature: "90°C",
    error: "-",
    overheat: false,
  },
  {
    id: 5,
    name: "Company C",
    status: "Suspended EVSE",
    voltage: "200kW",
    temperature: "90°C",
    error: "-",
    overheat: true,
  },
  {
    id: 6,
    name: "Company C",
    status: "Offline",
    voltage: "200kW",
    temperature: "90°C",
    error: "-",
    overheat: true,
  },
  {
    id: 7,
    name: "Company C",
    status: "Charging",
    voltage: "200kW",
    temperature: "90°C",
    error: "-",
    overheat: false,
  },
  {
    id: 8,
    name: "Company C",
    status: "Finished",
    voltage: "200kW",
    temperature: "90°C",
    error: "-",
    overheat: false,
  },
];

export default function Operation() {

  const router = useRouter();


  return (
    <div className="w-full mt-4">
      <div className="grid grid-cols-3 gap-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center rounded-md"
          >
            <div className="w-full bg-white p-2 rounded-md shadow-md">
              <div className="flex justify-between items-center mb-2">
                <p className="text-[4px] text-[#757575]">{item.name}</p>
                <div className={`${item.status === "Suspended EVSE" ? "w-[70px]" : "w-[52px]"} flex justify-between items-center`}>
                {item.overheat ? (
                  <div className="w-[30px] flex justify-center items-center bg-[#FFE4D8] px-1 py-[2px] rounded-[3px]">
                  <p className="text-[4px] text-[#BC3A00] font-semibold">Overheat</p>
                </div>
                ) : (
                  <div className="w-[30px]"/>
                )}
                <div
                  className={`${
                    item.status === "Available"
                      ? "bg-green-500"
                      : item.status === "Prepare"
                      ? "bg-orange-500"
                      : item.status === "Suspended EVSE"
                      ? "bg-red-500"
                      : item.status === "Offline"
                      ? "bg-red-500"
                      : item.status === "Charging"
                      ? "bg-yellow-500"
                      : item.status === "Finished"
                      ? "bg-blue-500"
                      : "bg-red-500"
                  } rounded-[3px] px-1 py-[2px]`}
                >
                  <p className="text-[4px] text-white">{item.status}</p>
                </div>
                </div>
              </div>
              <div className="w-full flex flex-col bg-gray-200 rounded-sm p-2">
                <div className="w-full flex justify-between my-2">
                  <div className="w-[40px] py-3 flex items-center justify-center rounded-md bg-white">
                    <img
                      src="images/thunder.png"
                      alt="thunder"
                      className="w-[15px] h-[15px]"
                    />
                  </div>
                  <div className="w-[40px] py-3 flex items-center justify-center rounded-md bg-white">
                    <img
                      src="images/plug_in.png"
                      alt="plug in"
                      className="w-[15px] h-[15px]"
                    />
                  </div>
                  <div className="w-[40px] py-3 flex items-center justify-center rounded-md bg-white">
                    <img
                      src="images/message.png"
                      alt="message"
                      className="w-[15px] h-[15px]"
                    />
                  </div>
                </div>
                <div className="w-full flex justify-between items-center">
                  <div className="w-[40px] flex flex-col justify-center items-center">
                    <p className="text-[#2E2E2E] text-[9px]">{item.voltage}</p>
                    <p className="text-[#757575] text-[5px]">Voltage</p>
                  </div>
                  <div className="w-[40px] flex flex-col justify-center items-center">
                    <p className="text-[#2E2E2E] text-[9px]">
                      {item.temperature}
                    </p>
                    <p className="text-[#757575] text-[5px]">Temperature gun</p>
                  </div>
                  <div className="w-[40px] flex flex-col justify-center items-center">
                    <p className="text-[#2E2E2E] text-[9px]">{item.error}</p>
                    <p className="text-[#757575] text-[5px]">Error</p>
                  </div>
                </div>
               
              </div>
              <div className="w-full mt-2">
                  <p className="text-[#757575] text-[7px]">Connector 1</p>
                  <p className="text-[#757575] text-[8px] font-semibold">
                    Ewval DC 160kW
                  </p>
                </div>
                <div className="w-full h-[1px] bg-[#C8D8F4] my-2" />
                <div className="w-full flex justify-between">
                  <div className="w-[50px] px-2 py-1 flex items-center justify-center rounded-md bg-[#EAF4FF]">
                    
                    <button className="w-[15px] h-[10px] ml-1" onClick={() => router.push(`/monitor-operation/view`)}>                    <p className="text-[#355FF5] text-[7px]">View</p>
                    </button>
                  </div>
                 {item.overheat ? (
                    <div className="w-[60px] px-2 py-1 flex items-center justify-center rounded-md">
                    <img
                      src="images/restart_disable.png"
                      alt=""
                      className="w-[15px] h-[10px] ml-1"
                    />
                    <img
                      src="images/stop_disable.png"
                      alt=""
                      className="w-[15px] h-[10px] ml-1"
                    />
                    <img
                      src="images/start_charger.png"
                      alt=""
                      className="w-[15px] h-[10px] ml-1"
                    />
                  </div>
                 ) : (
                    <div className="w-[60px]"/>
                 )}
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
