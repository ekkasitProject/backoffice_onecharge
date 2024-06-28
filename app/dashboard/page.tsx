import React from "react";
import OverView from "../components/dashboard/Overview";
import Energy from "../components/dashboard/Enery";
import TotalCharge from "../components/dashboard/TotalCharge";
import ViewStaionMap from "../components/dashboard/ViewStaionMap";
import Connectors from "../components/dashboard/Connectors";
import Transactions from "../components/dashboard/Transaction";
import Revenue from "../components/dashboard/Revenue";

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

      <div className=" h-[600px] bg-white m-4 rounded-md"></div>
      <div className=" h-[300px] bg-white m-4 rounded-md"></div>
    </div>
  );
}
