import React from 'react'

function ExtraCard({wind,humidity,uv}) {
  return (
    <div>
        <div className='mt-6  rounded-2xl shadow-2xl flex flex-row justify-around items-center space-x-14 m-auto bg-slate-100 w-[calc(100%_-_1rem)] h-56 md:w-[49vw] md:mt-16 md:mr-[1vw] xl:mt-2 xl:w-[47.5vw] xl:ml-[32vw]'>
        <div className='flex flex-col justify-center items-center space-y-4'>
            <img src="https://cdn-icons-png.flaticon.com/512/1506/1506761.png" className='h-16' alt="" />
            <h1 className='text-md font-bold'>Wind</h1>
            <h1 className='text-xl'>{wind}kp/h</h1>
        </div>
        <div className='flex flex-col justify-center items-center space-y-4'>
            <img src="https://cdn-icons-png.flaticon.com/512/728/728093.png" className='h-16' alt="" />
            <h1 className='text-md font-bold'>Humidity</h1>
            <h1 className='text-xl'>{humidity}%</h1>
        </div>
        <div className='flex flex-col justify-center items-center space-y-4'>
            <img src="https://cdn-icons-png.flaticon.com/512/7646/7646168.png" className='h-16' alt="" />
            <h1 className='text-md font-bold'>UV</h1>
            <h1 className='text-xl'>{uv}</h1>
        </div>
    </div>
    </div>
  )
}

export default ExtraCard