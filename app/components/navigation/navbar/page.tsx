import React from 'react'

export default function Navbar() {
  return (
    <div className='w-full flex fixed  z-50  top-0  justify-around  h-[60px] bg-white border-b-[1px]'>
        <div className='flex w-[100px] h-full justify- items-center'/>
        <div className='flex w-[200px] h-full justify-between items-center mr-4'>
            <div className='w-[17px] mr-2'>
              <img src="images/icon_thai.png" className="rounded-full" />
            </div>
            <div className='w-[150px] h-full flex justify-between items-center p-2'>
                <img src="images/icon_profile.png" alt="" className='w-[24px]'/>
              <div className='flex flex-col w-[90px]'>
                <p className='text-[#798BFF] text-[8px] font-medium'>Administrator</p>
                <div className='flex justify-between'>
                <p className='text-[#6E82A5] text-[9px] font-semibold'>Leadway Co.,Ltd</p>
                <img src="images/icon_arrow_down.png" className="w-[10px]"/>
                </div>
              </div>
            </div>
            <div className='w-[17px]'>
            <img src="images/icon_notification.png" className="" />
            </div>
        </div>
    </div>
  )
}
