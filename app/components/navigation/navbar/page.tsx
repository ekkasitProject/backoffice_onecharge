import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div className="w-full flex fixed z-10  top-0  justify-around  h-[60px] bg-white border-b-[1px]">
      <div className="flex w-[100px] h-full justify- items-center" />
      <div className="flex w-[200px] h-full justify-between items-center mr-4">
        <div className="w-[17px] mr-2">
          <Image
            src={`/images/icon_thai.png`}
            width={17}
            height={17}
            alt="menu"
          />
        </div>
        <div className="w-[150px] h-full flex justify-between items-center p-2">
          <Image
            src={`/images/icon_profile.png`}
            width={24}
            height={24}
            alt="profile"
          />

          <div className="flex flex-col w-[90px]">
            <p className="text-[#798BFF] text-[8px] font-medium">
              Administrator
            </p>
            <div className="flex justify-between">
              <p className="text-[#6E82A5] text-[9px] font-semibold">
                Leadway Co.,Ltd
              </p>
              <Image
                src={`/images/icon_arrow_down.png`}
                width={10}
                height={10}
                alt="menu"
              />
            </div>
          </div>
        </div>
        <div className="w-[17px]">
          <Image
            src={`/images/icon_notification.png`}
            width={17}
            height={17}
            alt="menu"
          />
        </div>
      </div>
    </div>
  );
}
