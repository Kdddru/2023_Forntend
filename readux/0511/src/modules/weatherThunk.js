/**액션 함수 , 리듀서작성
 * 
 * 
 * 날씨 API를 사용하여 외부에서 값을 가져옴
 * 
 * 외부에서 값을 가져올때는 시간이 걸리기 때문에 비동기로 가져옴
 * state : 날씨, loading
 * action : loading true, false, getWeather, 
 * startloading(true) ,endloading(false)
 * 
 */


const initialState = {
  weather : null,
  loading : false
}


//액션 생성 함수 >> thunk
//thunk를 사용하면 async를 붙여서 비동기함수로 쓸 수 있다
//async가 붙은 함수는 따로 계속 실행이되고 있다
export const getWeather = () => async(next) =>{
  //getWeather 실행 
  next({type: "startloading"})

  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Busan&appid=b24758f12a0cc287be08722bb2b7ce04&lang=kr');
  const data = await response.json();
  next({type:"getWeather", payload: data.weather[0].description});
  //getWeather 종료
  next({type: "endloading"})
}


//리듀서
function weatherThunk (state = initialState, action) {
  switch(action.type){
    case "getWeather":
      /**
       * 주소를 통해서 값 가져옴
       * 비동기로 값을 가져오기 때문에 값이 들어가지 않는다
       * action함수를 Thunk로 사용한다 (비동기함수 사용)
       */
      return {
        ...state,
        weather : action.payload
      }
    case "startloading":
      return {
        ...state,
        loading : true
      }
    case "endloading" :
      return {
        ...state,
        loading : false
      }

    default : 
      return state  
  }
}

export default weatherThunk