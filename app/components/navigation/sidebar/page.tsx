"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {}, []);
  return (
    <div className="w-[250px] h-screen bg-white z-20 left-0 top-0">
      <div>
        <Link href="/" className="cursor-pointer">
          <div className="w-full h-[60px] flex justify-center items-center">

            <img src="/images/logo_onecharge.png" alt="" className="w-[140px]" />
          </div>
        </Link>

        <Link href="/">
          <div
            className={`flex justify-start items-center ${
              pathname === "/" ? "bg-[#EFF2FC]" : ""
            }  py-2 px-4 mx-2 mt-4 rounded-lg`}
          >
            <Image
              src={`/images/${
                pathname === "/"
                  ? "icon_dashboard_active.png"
                  : "icon_dashboard.png"
              }`}
              width={15}
              height={15.47}
              alt="Icon Dashboard"
              className="mr-2"
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
        <Link href="/monitor-operation">
          <div
            className={`flex justify-start items-center ${
              pathname === "/monitor-operation" ||
              pathname === "/monitor-operation/view"
                ? "bg-[#EFF2FC]"
                : ""
            }  py-2 px-4 mx-2  rounded-lg`}
          >
            <Image
              src={`/images/${
                pathname === "/monitor-operation" ||
                pathname === "/monitor-operation/view"
                  ? "icon_dashboard_active.png"
                  : "icon_dashboard.png"
              }`}
              width={15}
              height={15.47}
              alt="Icon Monitor"
              className="mr-2"
            />

            <h1
              className={`text-[10px] ${
                pathname === "/monitor-operation" ||
                pathname === "/monitor-operation/view"
                  ? "text-[#355FF5]"
                  : "text-[#6E82A5]"
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
            <Image
              src={`/images/${
                pathname === "/announcement"
                  ? "icon_announcement_active.png"
                  : "icon_announcement.png"
              }`}
              width={15}
              height={15.47}
              alt="Announcement Icon"
              className="mr-2"
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
            <Image
              src={`/images/${
                pathname === "/maintenance"
                  ? "icon_maintenance_active.png"
                  : "icon_maintenance.png"
              }`}
              width={15}
              height={15.94}
              alt="Maintenance Icon"
              className="mr-2"
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
              <Image
                src={`/images/${
                  pathname === "/station-statistics" ||
                  pathname === "/device-statistics"
                    ? "icon_statistics_active.png"
                    : "icon_statistics.png"
                }`}
                width={15}
                height={15}
                alt="Icon Statistics"
                className="mr-2"
              />

              <h1
                className={`text-[10px] ${
                  pathname === "/station-statistics" ||
                  pathname === "/device-statistics"
                    ? "text-[#355FF5]"
                    : "text-[#6E82A5]"
                } font-semibold`}
              >
                Statistics
              </h1>
            </div>
            <Image
              src={`/images/icon_arrow_up.png`}
              width={15}
              height={15}
              alt="statistics arrow"
            />
          </div>
          <div
            className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
              isOpen === true ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="w-full ">
              <Link href="/station-statistics">
                <p
                  className={`text-[8px] mx-2 my-1 px-7 py-1 rounded-lg cursor-pointer ${
                    pathname === "/station-statistics"
                      ? "text-[#355FF5] bg-[#EFF2FC] font-medium"
                      : "text-[#6E82A5] font-light"
                  }`}
                >
                  Station Statistics
                </p>
              </Link>
              <Link href="/device-statistics">
                <p
                  className={`text-[8px] mx-2 my-1 px-7 py-1 rounded-lg cursor-pointer ${
                    pathname === "/device-statistics"
                      ? "text-[#355FF5] bg-[#EFF2FC] font-medium"
                      : "text-[#6E82A5] font-light"
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
          <Image
            src={`/images/${
              pathname === "/operation-log"
                ? "icon_operation_log_active.png"
                : "icon_operation_log.png"
            }`}
            width={12}
            height={17.25}
            alt="Operation Log Icon"
            className="mr-2"
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
