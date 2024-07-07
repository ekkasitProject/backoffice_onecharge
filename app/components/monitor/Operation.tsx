import React from "react";

const data = [
  {
    id: 1,
    name: "CPAC LCD Co., LTD",
    status: "Available",
    voltage: "299kW",
    temperature: "93°C",
    error: "-",
  },
  {
    id: 2,
    name: "Company B",
    status: "Unavailable",
    voltage: "150kW",
    temperature: "85°C",
    error: "Overload",
  },
  {
    id: 3,
    name: "Company C",
    status: "Available",
    voltage: "200kW",
    temperature: "90°C",
    error: "-",
  },
  {
    id: 4,
    name: "Company C",
    status: "Available",
    voltage: "200kW",
    temperature: "90°C",
    error: "-",
  },
  // Add more objects as needed
];

export default function Operation() {
  return (
    <div className="w-full mt-4">
      <div className="grid grid-cols-3 gap-4 ">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center  rounded-md"
          >
            <div className="w-full bg-white p-2 rounded-md shadow-md">
              <div className="flex justify-between items-center mb-2">
                <p className="text-[4px] text-[#757575]">{item.name}</p>
                <div
                  className={`bg-[${
                    item.status === "Available" ? "#2FAB24" : "#F72D20"
                  }] rounded-[3px] px-1 py-[2px]`}
                >
                  <p className="text-[4px] text-white">{item.status}</p>
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
              <div className="w-full mt-2 ">
                <p className="text-[#757575] text-[7px]">Connector 1</p>
                <p className="text-[#757575] text-[8px] font-semibold">
                  Ewval DC 160kW
                </p>
              </div>
              <div className="w-full h-[1px] bg-[#C8D8F4]  my-2" />
             <div className="w-full flex justify-between">
             <div className="w-[50px] px-2  py-1 flex items-center justify-center rounded-md bg-[#EAF4FF]">
                <p className="text-[#355FF5] text-[7px]">View</p>
              </div>
              <div className="w-[60px] px-2 py-1 flex items-center justify-center rounded-md ">
              <img src="images/restart_disable.png" alt="" className="w-[15px] h-[10-x] ml-1" />
              <img src="images/stop_disable.png" alt="" className="w-[15px] h-[10-x] ml-1" />
              <img src="images/start_charger.png" alt="" className="w-[15px] h-[10-x] ml-1" />

              </div>
             </div>

              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
