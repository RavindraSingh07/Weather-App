import React,{useState} from 'react'

function SearchBar() {
const [city, setCity] = useState('')

function handleClick(){
  
}
  return (
    <div className='flex justify-center items-center'>
        <input type="text" placeholder='Search for your city' className='px-3 my-10 mx-1 py-3 text-[1rem] focus:outline-none focus:ring-1' onChange={e => setCity(e.target.value)} value={city} />
        <button className='bg-orange-400 px-3 py-3 rounded-md text-white hover:bg-orange-500 shadow-2xl' onClick={handleClick} >Search</button>
        <button className='bg-orange-400 px-3 py-3 rounded-md text-white hover:bg-orange-500 shadow-2xl' onClick={console.log(GeolocationCoordinates) }>Use Location</button>
    </div>
  )
}

export default SearchBar