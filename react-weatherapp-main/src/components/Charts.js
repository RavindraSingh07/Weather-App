import React from 'react'
import './Chart.css'

function Charts({ temp_c, icon, text, date }) {
  return (
    <div className=''>

      <div className='flex flex-col items-center space-y-3'>
        <div className='snap-center '>
          <img src={icon} alt="" />
        </div>
        <div className='snap-center text-ellipsis w-[200px] '>
          <h1 className='text-center font-semibold '>{text}</h1>
        </div>
        <div className='snap-center'>
          <h1 className='font-semibold'>{temp_c}°C</h1>
        </div>
        <div className='snap-center'>
          <h1 className='text-center text-xl font-bold text-ellipsis'>{date}:00</h1>
        </div>
      </div>

    </div>
  )
}

export default Charts