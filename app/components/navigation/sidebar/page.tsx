"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-[220px] h-screen  bg-white z-20 left-0 top-0">
      <div>
          <Link href="/" className="cursor-pointer">
            <img src="images/logo_onecharge.png" className="p-5" />
          </Link>
        
        <Link href="/">
          <div
            className={`flex ${
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
              className="w-[15px] h-[15px] mr-2"
            />
            <h1
              className={`text-[12px] ${
                pathname === "/" ? "text-[#355FF5]" : "text-[#6E82A5]"
              } font-semibold`}
            >
              DashBoard
            </h1>
          </div>
        </Link>
        <Link href="/monitor">
          <div
            className={`flex ${
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
              className="w-[15px] h-[15px] mr-2"
            />
            <h1
              className={`text-[12px] ${
                pathname === "/monitor" ? "text-[#355FF5]" : "text-[#6E82A5]"
              } font-semibold`}
            >
              Monitor Operation
            </h1>
          </div>
        </Link>
        <Link href="/announcement">
          <div
            className={`flex ${
              pathname === "/announcement" ? "bg-[#EFF2FC]" : ""
            }  py-2 px-4 mx-2  rounded-lg`}
            >
            <img
              src={`${
                pathname === "/announcement"
                  ? "images/icon_dashboard_active.png"
                  : "images/icon_dashboard.png"
              }`}
              alt=""
              className="w-[15px] h-[15px] mr-2"
            />
            <h1
              className={`text-[12px] ${
                pathname === "/announcement"
                  ? "text-[#355FF5]"
                  : "text-[#6E82A5]"
              } font-semibold`}
            >
              Announcement
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
