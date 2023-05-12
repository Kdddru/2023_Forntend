import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeather } from '../modules/weatherThunk';

export const WeatherThunk = () => {
  const dispatch = useDispatch();
  const weatherThunk = useSelector((state)=>(
    state.weatherThunk
  ))
  useEffect(()=>{dispatch(getWeather())},[]);

  return (
    <div>
      <h1>WeatherThunk</h1>
      <div>{weatherThunk.loading && "로딩중입니다"}</div>
      <p>{weatherThunk.weather && weatherThunk.weather}</p>
    </div>
  )
}
