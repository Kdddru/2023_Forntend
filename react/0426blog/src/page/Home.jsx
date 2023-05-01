import React, { useEffect, useState } from 'react'
import { SimpleSlider } from '../components/SimpleSlider'


import axios from 'axios'

export const Home = () => {

  const [weather, setWeather] = useState('');
  const [weatherIcon,  setWeatherIcon] = useState('');


  useEffect(()=>{

    async function getWeather() {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Busan&appid=b24758f12a0cc287be08722bb2b7ce04&lang=kr');
        console.log(response);
        console.log(response.data.weather[0].main);
        console.log(response.data.weather[0].icon);
        
        //useState에 값 저장
        setWeather(response.data.weather[0].description);
        setWeatherIcon(response.data.weather[0].icon);
      } catch (error) {
        console.error(error);
      }
    }
    console.log(getWeather());

  },[])


  return (
    <div>
      <h3>{weather}/{weatherIcon}</h3>
      <SimpleSlider/>
    </div>
  )
}
