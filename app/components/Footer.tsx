import React from 'react'

export default function Footer() {
  return (
    <footer className='w-[930px] flex fixed   bottom-0  justify-between items-center h-[50px] p-2 bg-white'>
        <div className=''>
        <h2 className='text-center text-[#8094AE] font-normal text-[14px]'>© 2024 OneCharge Co., Ltd.</h2>

        </div>
        <div className=' flex justify-center space-x-4'>
            <p className='text-[#798BFF] text-[13px]'>Terms Condition</p>
            <p className='text-[#798BFF] text-[13px]'>Policy</p>
            <p className='text-[#798BFF] text-[13px]'>Help</p>
        </div>
    </footer>
  )
}
