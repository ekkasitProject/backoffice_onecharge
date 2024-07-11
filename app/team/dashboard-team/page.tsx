"use client";
import Charger from "@/app/components/team/Charger";
import ChargingStations from "@/app/components/team/ChargingStations";
import Members from "@/app/components/team/Members";
import Overview from "@/app/components/team/Overview";
import React, { useState } from "react";

export default function page() {
  const [currentComponent, setCurrentComponent] = useState("Overview");

  const handleClick = (component: string) => setCurrentComponent(component);
  return (
    <div className="mx-4   rounded-md">
      <div className="">
        <p className="text-[#364A63] text-[12px] font-medium">OneCharge Gang</p>
      </div>
      <div className="w-full h-[30px] bg-white my-2">
        <div className="w-[500px]  h-full flex justify-around  items-center">
          <button
            className={` text-[8px] font-medium ${
              currentComponent === "Overview" ? "text-[#355FF5]" : "text-[#6E82A5]"
            }`}
            onClick={() => handleClick("Overview")}
          >
            Overview
          </button>
          <button
            className={` text-[8px] font-medium ${
              currentComponent === "Charging Stations" ? "text-[#355FF5]" : "text-[#6E82A5]"
            }`}
            onClick={() => handleClick("Charging Stations")}
          >
            Charging Stations
          </button>
          <button
            className={` text-[8px] font-medium ${
              currentComponent === "Charger" ? "text-[#355FF5]" : "text-[#6E82A5]"
            }`}
            onClick={() => handleClick("Charger")}
          >
            Charger
          </button>
          <button
            className={` text-[8px] font-medium ${
              currentComponent === "Members"?"text-[#355FF5]" : "text-[#6E82A5]"
            }`}
            onClick={() => handleClick("Members")}
          >
            Members
          </button>
          <button
            className={` text-[8px] font-medium ${
              currentComponent === "Team Wallet" ?"text-[#355FF5]" : "text-[#6E82A5]"
            }`}
            onClick={() => handleClick("Team Wallet")}
          >
            Team Wallet
          </button>
          <button
            className={` text-[8px] font-medium ${
              currentComponent === "Price group" ? "text-[#355FF5]" : "text-[#6E82A5]"
            }`}
            onClick={() => handleClick("Price group")}
          >
            Price group
          </button>
          <button
            className={` text-[8px] font-medium ${
              currentComponent === "Settings" ? "text-[#355FF5]" : "text-[#6E82A5]"
            }`}
            onClick={() => handleClick("Settings")}
          >
            Settings
          </button>
        </div>
       
        
      </div>
      {currentComponent === "Overview" && <Overview />}
      {currentComponent === "Charging Stations" && <ChargingStations />}
      {currentComponent === "Charger" && <Charger />}
      {currentComponent === "Members" && <Members />}
      <div className="h-[70px]"/> 
    </div>
  );
}
