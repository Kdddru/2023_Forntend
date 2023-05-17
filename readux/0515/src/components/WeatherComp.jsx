import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeatherAPI } from '../slices/weatherSlice';

export const WeatherComp = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state)=>(state.weather))
  

  useEffect(()=>{
    dispatch(getWeatherAPI())
  },[])
  return (
    <div>
      <h1>WeatherComp</h1>
      <p>{weather.loading ? "로딩중입니다" : "로딩이끝났습니다"}</p>
      <p>{weather.weather && weather.weather}</p>
    </div>
  )
}
