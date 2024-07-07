"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const data = [
  { id: 1,conpanyName:"CPAC LCD Co.,LTD", connectorId: 1, chargerName:"Ewval DC 160kW", voltage :299 ,temperature: 93 ,status:"Available",statusCode : 0, overheat: false},
  { id: 2,conpanyName:"CPAC LCD Co.,LTD", connectorId: 2, chargerName:"Ewval DC 75kW", voltage :299 ,temperature: 93 ,status:"Available",statusCode : 0, overheat: false},
  { id: 3,conpanyName:"CPAC LCD Co.,LTD", connectorId: 1, chargerName:"Ewval AC 20kW", voltage :299 ,temperature: 93 ,status:"Available",statusCode : 0, overheat: false},
  { id: 4,conpanyName:"CPAC LCD Co.,LTD", connectorId: 1, chargerName:"Ewval DC 160kW", voltage :299 ,temperature: 93 ,status:"Prepare",statusCode : 5001, overheat: false},
  { id: 5,conpanyName:"CPAC LCD Co.,LTD", connectorId: 1, chargerName:"Ewval DC 160kW", voltage :299 ,temperature: 93 ,status:"Suspended EVSE",statusCode : 5001, overheat: true},
  { id: 6,conpanyName:"CPAC LCD Co.,LTD", connectorId: 1, chargerName:"Ewval DC 160kW", voltage :299 ,temperature: 93 ,status:"Offline",statusCode : 5001, overheat: true},
  { id: 7,conpanyName:"CPAC LCD Co.,LTD", connectorId: 1, chargerName:"Ewval DC 160kW", voltage :299 ,temperature: 93 ,status:"Charging",statusCode : 0, overheat: false},
  { id: 8,conpanyName:"CPAC LCD Co.,LTD", connectorId: 1, chargerName:"Ewval DC 160kW", voltage :299 ,temperature: 93 ,status:"Finished",statusCode : 0, overheat: false},
  { id: 9,conpanyName:"CPAC LCD Co.,LTD", connectorId: 1, chargerName:"Ewval DC 160kW", voltage :299 ,temperature: 93 ,status:"Finished",statusCode : 0, overheat: false},
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
            <div className="w-full bg-white p-2 rounded-md shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <p className="text-[4px] text-[#757575]">{item.conpanyName}</p>
                <div className={`${item.status === "Suspended EVSE" ? "w-[70px]" : "w-[52px]"} flex justify-between items-center`}>
                {item.overheat ? (
                  <div className="w-[30px] flex justify-center items-center bg-[#FFE4D8] px-1 py-[2px] rounded-xl">
                  <p className="text-[4px] text-[#BC3A00] font-semibold">Overheat</p>
                </div>
                ) : (
                  <div className="w-[30px]"/>
                )}
                <div
                  className={`${
                    item.status === "Available"
                      ? "bg-[#2FAB24]"
                      : item.status === "Prepare"
                      ? "bg-[#BC3A00]"
                      : item.status === "Suspended EVSE"
                      ? "bg-[#F72D20]"
                      : item.status === "Offline"
                      ? "bg-[#F72D20]"
                      : item.status === "Charging"
                      ? "bg-[#FF9640]"
                      : item.status === "Finished"
                      ? "bg-[#3DA4E3]"
                      : "bg-red-500"
                  } rounded-[3px] px-1 py-[2px]`}
                >
                  <p className="text-[4px] text-white">{item.status}</p>
                </div>
                </div>
              </div>
              <div className="w-full flex flex-col bg-[#F4F6FA] rounded-sm p-2">
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
                    <Image src={`/images/${item.statusCode === 0 ? "message_disable" : "message"}.png`} alt="charging" width={15} height={15} />
                   
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
                    <p className="text-[#2E2E2E] text-[9px]">{item.statusCode === 0 ? "-" : item.statusCode}</p>
                    <p className="text-[#757575] text-[5px]">Error</p>
                  </div>
                </div>
               
              </div>
              <div className="w-full mt-2">
                  <p className="text-[#757575] text-[7px]">Connector {item.connectorId}</p>
                  <p className="text-[#757575] text-[8px] font-semibold">
                    {item.chargerName}
                  </p>
                </div>
                <div className="w-full h-[1px] bg-[#C8D8F4] my-2" />
                <div className="w-full flex justify-between">
                  <div className="w-[50px] px-2 py-1 flex items-center justify-center rounded-md bg-[#EAF4FF]">
                    
                    <button className="w-[15px] h-[10px]" onClick={() => router.push(`/monitor-operation/view`)}>    
                                      <p className="text-[#355FF5] text-[7px]">View</p>
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
