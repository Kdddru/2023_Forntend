import { createSlice } from "@reduxjs/toolkit";


// 바로 바뀌는거 -> 리듀서
// 외부에서 들고오는것 -> thunk
export const weatherSlice = createSlice(
  {
    name : 'weather',
    initialState :{
      weather : null,
      loading : false
    },
    reducers:{
      startLoading : (state)=>{
        state.loading = true
      },
      endLoading : (state)=>{
        state.loading = false
      },
      getWeather : (state,action) =>{
        //action.payload => 날씨 api에서 받아온값
        state.weather = action.payload
      }
    }
  }
)

export const getWeatherAPI = () => async(dispatch) =>{
  dispatch(startLoading);
  
  try{
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Busan&appid=b24758f12a0cc287be08722bb2b7ce04&lang=kr')
    const data = await response.json();
    dispatch(getWeather(data.weather[0].description));

  }
  //오류났을때 실행
  catch {
    dispatch(getWeather("없음"));  
  }
  dispatch(endLoading);
}


export const { startLoading,endLoading,getWeather } = weatherSlice.actions
export default weatherSlice.reducer