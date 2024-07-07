import React from 'react'
import Monitor from '../components/monitor/Monitor'

export default function page() {
  return (
    <div className='flex justify-between m-4'>
      <Monitor/>
      <div className='w-[560px] h-[600px] bg-white mb-20'></div>
    </div>
  )
}
