"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[250px] h-screen bg-white z-20 left-0 top-0">
      <div>
        <Link href="/" className="cursor-pointer">
          <img src="images/logo_onecharge.png" className="p-5" />
        </Link>

        <Link href="/">
          <div
            className={`flex justify-start items-center ${
              pathname === "/" ? "bg-[#EFF2FC]" : ""
            }  py-2 px-4 mx-2 mt-4 rounded-lg`}
          >
            <img
              src={`${
                pathname === "/"
                  ? "images/icon_dashboard_active.png"
                  : "images/icon_dashboard.png"
              }`}
              alt=""
              className="w-[12px] mr-2"
            />
            <h1
              className={`text-[10px] ${
                pathname === "/" ? "text-[#355FF5]" : "text-[#6E82A5]"
              } font-semibold`}
            >
              DashBoard
            </h1>
          </div>
        </Link>
        <Link href="/monitor">
          <div
            className={`flex justify-start items-center ${
              pathname === "/monitor" ? "bg-[#EFF2FC]" : ""
            }  py-2 px-4 mx-2  rounded-lg`}
          >
            <img
              src={`${
                pathname === "/monitor"
                  ? "images/icon_dashboard_active.png"
                  : "images/icon_dashboard.png"
              }`}
              alt=""
              className="w-[12px] mr-2"
            />
            <h1
              className={`text-[10px] ${
                pathname === "/monitor" ? "text-[#355FF5]" : "text-[#6E82A5]"
              } font-semibold`}
            >
              Monitor Operation
            </h1>
          </div>
        </Link>
        <Link href="/announcement">
          <div
            className={`flex justify-start items-center ${
              pathname === "/announcement" ? "bg-[#EFF2FC]" : ""
            }  py-2 px-4 mx-2  rounded-lg`}
          >
            <img
              src={`${
                pathname === "/announcement"
                  ? "images/icon_maintenance.png"
                  : "images/icon_announcement.png"
              }`}
              alt=""
              className="w-[12px] mr-2"
            />
            <h1
              className={`text-[10px] ${
                pathname === "/announcement"
                  ? "text-[#355FF5]"
                  : "text-[#6E82A5]"
              } font-semibold`}
            >
              Announcement
            </h1>
          </div>
        </Link>
        <Link href="/maintenance">
          <div
            className={`flex justify-start items-center ${
              pathname === "/maintenance" ? "bg-[#EFF2FC]" : ""
            }  py-2 px-4 mx-2  rounded-lg`}
          >
            <img
              src={`${
                pathname === "/maintenance"
                  ? "images/icon_maintenance.png"
                  : "images/icon_maintenance.png"
              }`}
              alt=""
              className="w-[12px] mr-2"
            />
            <h1
              className={`text-[10px] ${
                pathname === "/maintenance"
                  ? "text-[#355FF5]"
                  : "text-[#6E82A5]"
              } font-semibold`}
            >
              Maintenance
            </h1>
            <div className="flex justify-center items-center w-[15px] h-[15px] bg-red-500 ml-2 rounded-full">
              <p className="text-white text-[10px]">3</p>
            </div>
          </div>
        </Link>
        <div>
          <div
            className={`flex justify-between items-center ${
              pathname === "/statistics" ? "bg-[#EFF2FC]" : ""
            } py-2 pl-4 pr-2 ml-2 rounded-lg cursor-pointer transition-colors duration-300`}
            onClick={handleToggle}
          >
            <div className="flex justify-start items-center">
              <img
                src="images/icon_statistics.png"
                alt="Statistics Icon"
                className="w-[12px] mr-2"
              />
              <h1
                className={`text-[10px] ${
                  pathname === "/statistics"
                    ? "text-[#355FF5]"
                    : "text-[#6E82A5]"
                } font-semibold`}
              >
                Statistics
              </h1>
            </div>
            <img
              src="images/icon_arrow_up.png"
              alt="Arrow Icon"
              className={`w-[15px] h-[15px] ml-2 transition-transform duration-300 ${
                isOpen ? "transform rotate-180" : ""
              }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
              isOpen === true ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="w-full pl-7">
              <Link href="/station-statistics">
                <p
                  className={`text-[8px] mx-2 my-1 px-2 py-1 font-light cursor-pointer ${
                    pathname === "/station-statistics"
                      ? "text-[#355FF5] bg-[#EFF2FC]"
                      : "text-[#6E82A5]"
                  }`}
                >
                  Station Statistics
                </p>
              </Link>
              <Link href="/device-statistics">
                <p
                  className={`text-[8px] mx-2 my-1 px-2 py-1 font-light cursor-pointer ${
                    pathname === "/device-statistics"
                      ? "text-[#355FF5] bg-[#EFF2FC]"
                      : "text-[#6E82A5]"
                  }`}
                >
                  Device Statistics
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link href="/operation-log">
        <div
          className={`flex justify-start items-center ${
            pathname === "/operation-log" ? "bg-[#EFF2FC]" : ""
          }  py-2 px-4 mx-2  rounded-lg`}
        >
          <img
            src={`${
              pathname === "/operation-log"
                ? "images/icon_operation_log.png"
                : "images/icon_operation_log.png"
            }`}
            alt=""
            className="w-[10px]  mr-2"
          />
          <h1
            className={`text-[10px] ${
              pathname === "/operation-log"
                ? "text-[#355FF5]"
                : "text-[#6E82A5]"
            } font-semibold`}
          >
            Operation log
          </h1>
        </div>
      </Link>
    </div>
  );
}
