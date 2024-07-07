"use client";
import React, { useEffect } from "react";
import OverView from "../components/dashboard/Overview";
import Energy from "../components/dashboard/Enery";
import TotalCharge from "../components/dashboard/TotalCharge";
import ViewStaionMap from "../components/dashboard/ViewStaionMap";
import Connectors from "../components/dashboard/Connectors";
import Transactions from "../components/dashboard/Transaction";
import Revenue from "../components/dashboard/Revenue";
import RevenueStation from "../components/dashboard/RevenueStation";
import StationList from "../components/dashboard/StationList";
import RealtimeMonitor from "../components/dashboard/RealtimeMonitor";
import ChargingTrend from "../components/dashboard/ChargingTrend";
import TimeUtilization from "../components/dashboard/TimeUtilization";
import Maintenance from "../components/dashboard/Maintenance";

export default function Dashboard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mx-4">
      <div className=" h-[50px] bg-white  rounded-md">
        <OverView />
      </div>
      <div className=" flex justify-between my-4">
        <Energy />
        <Connectors />
        <Transactions />
        <Revenue />
      </div>
      <div className=" flex  justify-between my-4">
        <TotalCharge />
        <ViewStaionMap />
      </div>
      <div className="flex justify-between h-[700px] my-4 rounded-md">
        <div className="flex flex-col w-[35%]">
          <RevenueStation />
          <RealtimeMonitor />
        </div>
        <div className="w-[63%] ">
          <div>
            <StationList />
            <div className="flex w-full justify-between  h-[255px]  mt-4 rounded-md">
              <ChargingTrend />
              <TimeUtilization />
            </div>
          </div>
        </div>
      </div>
      <Maintenance />
      <div className="h-[50px]"/>
    </div>
  );
}
