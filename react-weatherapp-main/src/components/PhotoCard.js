import React from 'react'

function PhotoCard({ temp_c, name, text, feelslike, region }) {
    return (
        <div>
            <div className='grid place-items-center'>
                <div className='bg-slate-100  w-[calc(100%_-_1rem)] absolute m-auto h-56 rounded-2xl shadow-2xl flex items-center xl:w-[47vw] xl:h-[61vh] xl:left-[1vw] xl:top-[39.8vh] '>
                    <img src="https://images.unsplash.com/photo-1484199316358-d7acb93729f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1195&q=80" alt="" className='w-[calc(100%_-_1rem)] m-auto hue-rotate-45 rounded-2xl contrast-75 h-[calc(100%_-_1rem)]' />
                </div>
                <div className=' relative xl:left-[15vw] '>
                    <div className='flex flex-col items-center xl:w-[300px]'>

                        <h1 className='text-[2rem] font-bold text-white '>{temp_c}°C</h1>
                        <h1 className='text-2xl font-bold text-white'>{name}</h1>
                        <p className='text-xl font-bold text-white'>{region}</p>
                        <h1 className='text-xl font-semibold text-white'>{text}</h1>
                        <p className=' text-xl text-white'>Feels Like {feelslike}°C</p>
                        {/* <p className='  text-white'></p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotoCard