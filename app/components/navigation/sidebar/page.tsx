"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

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
          <div className="w-full h-[60px] flex justify-center items-center">
            <Image
              src={`/images/logo_onecharge.png`}
              width={120}
              height={17.61}
              alt="Icon Monitor"
            />
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
        <Link href="/team">
          <div
            className={`flex justify-start items-center ${
              pathname === "/team" ? "bg-[#EFF2FC]" : ""
            }  py-2 px-4 mx-2  rounded-lg`}
          >
            <Image
              src={`/images/${
                pathname === "/team"
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
                pathname === "/team" ? "text-[#355FF5]" : "text-[#6E82A5]"
              } font-semibold`}
            >
              Team
            </h1>
          </div>
        </Link>
        <Link href="/transaction">
          <div
            className={`flex justify-start items-center ${
              pathname === "/transaction" ? "bg-[#EFF2FC]" : ""
            }  py-2 px-4 mx-2  rounded-lg`}
          >
            <Image
              src={`/images/${
                pathname === "/transaction"
                  ? "icon_transaction_active.png"
                  : "icon_transaction.png"
              }`}
              width={15}
              height={15.47}
              alt="transaction Icon"
              className="mr-2"
            />

            <h1
              className={`text-[10px] ${
                pathname === "/transaction"
                  ? "text-[#355FF5]"
                  : "text-[#6E82A5]"
              } font-semibold`}
            >
              Transaction
            </h1>
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
                  pathname === "/charging-stations" ||
                  pathname === "/chargers"
                    ? "icon_charging_station_active.png"
                    : "icon_charging_station.png"
                }`}
                width={15}
                height={15}
                alt="Icon Statistics"
                className="mr-2"
              />

              <h1
                className={`text-[10px] ${
                  pathname === "/charging-stations" ||
                  pathname === "/chargers"
                    ? "text-[#355FF5]"
                    : "text-[#6E82A5]"
                } font-semibold`}
              >
                Charging Stations
              </h1>
            </div>
            {isOpen ? (
              <IoIosArrowUp className="text-[#6E82A5] text-[8px]  " />
            ) : (
              <IoIosArrowDown className="text-[#6E82A5] text-[8px]  " />
            )}
          </div>
          <div
            className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
              isOpen === true ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="w-full ">
              <Link href="/charging-stations">
                <p
                  className={`text-[10px] mx-2 my-1 px-7 py-1 rounded-lg cursor-pointer ${
                    pathname === "/charging-stations"
                      ? "text-[#355FF5] bg-[#EFF2FC] font-medium"
                      : "text-[#6E82A5] font-normal"
                  }`}
                >
                  Charging Stations
                </p>
              </Link>
              <Link href="/chargers">
                <p
                  className={`text-[10px] mx-2 my-1 px-7 py-1 rounded-lg cursor-pointer ${
                    pathname === "/chargers"
                      ? "text-[#355FF5] bg-[#EFF2FC] font-medium"
                      : "text-[#6E82A5] font-normal"
                  }`}
                >
                  Chargers{" "}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link href="/revenue">
        <div
          className={`flex justify-start items-center ${
            pathname === "/revenue" ? "bg-[#EFF2FC]" : ""
          }  py-2 px-4 mx-2  rounded-lg`}
        >
          <Image
            src={`/images/${
              pathname === "/revenue"
                ? "icon_revenue_active.png"
                : "icon_revenue.png"
            }`}
            width={12}
            height={17.25}
            alt="Operation Log Icon"
            className="mr-2"
          />

          <h1
            className={`text-[10px] ${
              pathname === "/revenue"
                ? "text-[#355FF5]"
                : "text-[#6E82A5]"
            } font-semibold`}
          >
            Revenue
          </h1>
        </div>
      </Link>
      <Link href="/shop">
        <div
          className={`flex justify-start items-center ${
            pathname === "/shop" ? "bg-[#EFF2FC]" : ""
          }  py-2 px-4 mx-2  rounded-lg`}
        >
          <Image
            src={`/images/${
              pathname === "/shop"
                ? "icon_shop_active.png"
                : "icon_shop.png"
            }`}
            width={12}
            height={17.25}
            alt="Operation Log Icon"
            className="mr-2"
          />

          <h1
            className={`text-[10px] ${
              pathname === "/shop"
                ? "text-[#355FF5]"
                : "text-[#6E82A5]"
            } font-semibold`}
          >
            Shop
          </h1>
        </div>
      </Link>
    </div>
  );
}
