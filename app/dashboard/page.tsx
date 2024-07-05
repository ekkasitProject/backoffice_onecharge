import React from "react";
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

export default function Dashboard() {
  return (
    <div>
      <div className=" h-[50px] bg-white m-4 rounded-md">
        <OverView />
      </div>
      <div className=" flex justify-between m-4">
        <Energy />
        <Connectors />
        <Transactions />
        <Revenue />
      </div>
      <div className=" flex  justify-between m-4">
        <TotalCharge />
        <ViewStaionMap />
      </div>
      <div className="flex justify-between h-[700px] m-4 rounded-md">
        <div className="flex flex-col w-[35%]">
        <RevenueStation />
        <RealtimeMonitor />
        </div>
        <div className="w-[63%] ">
          <div>
          <StationList />
          <div className="flex w-full justify-between h-[255px]  mt-4 rounded-md">
                  <ChargingTrend />
              
              <div className="w-[48%] h-full bg-green-200 rounded-md"></div>
          </div>
          </div>
        </div>
      </div>
      <div className=" h-[400px] bg-white m-4 rounded-md"></div>
    </div>
  );
}
