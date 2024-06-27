"use client"
import React, { useEffect, useState } from 'react';

export default function OverView() {
  // ฟังก์ชันเพื่อรับเวลาปัจจุบันในรูปแบบ hh:mm:ss AM/PM
  const getCurrentTime = () => {
    const today = new Date();
    let hours = today.getHours();
    const minutes = String(today.getMinutes()).padStart(2, '0');
    const seconds = String(today.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // ชั่วโมง 0 ควรแสดงเป็น 12
    return `${hours}:${minutes}:${seconds} ${ampm}`;
  };

  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  // ฟังก์ชันเพื่อรับวันที่ปัจจุบันในรูปแบบ dd/mm/yyyy
  const getCurrentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // getMonth() คืนค่าเป็น 0-11 ต้องบวก 1
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    // ตั้งตัวจับเวลาให้ทำงานทุกๆ วินาที
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    // ล้างตัวจับเวลาเมื่อ component ถูกถอดออก
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='w-[300px] h-full flex justify-around  items-center'>
      <p className='text-[#355FF5] text-[20px] ml-4 font-medium'>Overview</p>
      <div className='w-[1px] h-[50%] mx-4 bg-[#CDD5DE] rounded-full'/>
      <div className='flex w-[90px] justify-around  '>
        <img src="images/icon_calendar.png" alt="Calendar Icon" className='w-[15px]' />
        <p className='text-[10px] text-[#414D6A] font-light'>{getCurrentDate()}</p>
      </div>
      <div className='flex w-[90px] justify-around  '>
        <img src="images/icon_clock.png" alt="Clock Icon" className='w-[15px]' />
        <p className='text-[10px] text-[#414D6A] font-light'>{currentTime}</p>
      </div>
    </div>
  );
}
