import React, { useEffect, useState } from 'react'
import Charts from './components/Charts';
import ExtraCard from './components/ExtraCard';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PhotoCard from './components/PhotoCard';
//import SearchBar from './components/SearchBar';
import SunCard from './components/SunCard';


function Card() {

  const [temp, setTemp] = useState()
  const [text, setText] = useState('')
  const [feelslike, setFeelslike] = useState()
  const [uv, setUv] = useState()
  const [location, setLocation] = useState('Chirawa')
  const [region, setRegion] = useState('')
  const [sunrise, setSunrise] = useState('')
  const [sunset, setSunset] = useState('')
  const [humidity, setHumidity] = useState()
  const [wind, setWind] = useState()
  const [url, setUrl] = useState('https://api.weatherapi.com/v1/forecast.json?key=630572f84f16422c95165110221606&q=Jodhpur&days=1&aqi=yes&alerts=no')
  const [city, setCity] = useState('')
  const [forecast, setForecast] = useState([])




  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(result => {
        setTemp(result.current.temp_c)
        setText(result.current.condition.text)
        setFeelslike(result.current.feelslike_c)
        setLocation(result.location.name)
        setRegion(result.location.region)
        setSunrise(result.forecast.forecastday[0].astro.sunrise)
        setSunset(result.forecast.forecastday[0].astro.sunset)
        setUv(result.current.uv)
        setHumidity(result.current.humidity)
        setWind(result.current.wind_kph)
        setForecast(result.forecast.forecastday[0].hour)
        console.log(result);
      })


  }, [url])
  function handleClick() {
    setUrl(`https://api.weatherapi.com/v1/forecast.json?key=630572f84f16422c95165110221606&q=${city}&days=1&aqi=yes&alerts=no`)
  }




  return (
    <div>
      <Navbar />
      <div className='flex justify-center items-center mb-8'>
        <input type="text" placeholder='Search for your city' className='px-3 my-10 mx-1 py-3 text-[1rem] focus:outline-none focus:ring-1 xl:w-[40vw] md:w-[40vw] sm:w-[40vw]' onChange={e => setCity(e.target.value)} value={city} onKeyPress={(e) => {
          if (e.charCode === 13) {
            handleClick()
          }
        }} />
        <button className='bg-orange-400 px-3 py-3 rounded-md text-white hover:bg-orange-500 shadow-2xl' onClick={handleClick} >Search</button>

      </div>
      <div className='xl:flex xl:flex-row xl:justify-between overflow-x-hidden xl:items-center'>

        <PhotoCard temp_c={temp} name={location} feelslike={feelslike} text={text} region={region} />

        <div className='md:flex md:flex-row xl:flex xl:flex-col xl:pr-[20rem]'>
          <SunCard sunrise={sunrise} sunset={sunset} />
          <ExtraCard wind={wind} uv={uv} humidity={humidity} />
        </div>
      </div>
      <div className='mt-6 overflow-auto snap-x rounded-2xl shadow-2xl flex flex-row m-auto items-center space-x-20  bg-purple-200 w-[calc(100%_-_1rem)] h-56'>

        {forecast.map((e) => {
          return <Charts temp_c={e.temp_c.toFixed(1)} key={e.time} icon={e.condition.icon} text={e.condition.text} date={new Date(e.time).getHours()} />
        })}
      </div>
      <Footer />
    </div>
  )
}

export default Card