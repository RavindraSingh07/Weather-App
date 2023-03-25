import React from 'react'

function SunCard({sunrise,sunset}) {
  return (
    <div className='mt-16  rounded-2xl shadow-2xl flex flex-row justify-center items-center space-x-24 m-auto bg-slate-100 w-[calc(100%_-_1rem)] h-56 sm:-space-x-20 sm:justify-around md:w-[48vw] xl:space-x-4 xl:w-[47.5vw] xl:ml-[32vw] '>
        <div className='flex flex-col justify-center items-center space-y-6'>
            <img src="https://cdn-icons-png.flaticon.com/512/941/941818.png" className='h-24' alt="" />
            <h1 className='text-xl'>{sunrise}</h1>
        </div>
        <div className='flex flex-col justify-center items-center space-y-6'>
            <img src="https://cdn-icons-png.flaticon.com/512/1788/1788609.png" className='h-24' alt="" />
            <h1 className='text-xl'>{sunset}</h1>
        </div>
    </div>
  )
}

export default SunCard