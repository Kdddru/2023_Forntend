//액션함수와 리듀서 함수를 작성하는 공간


/**
 * 리덕스 미들웨어인 Thunk 사용방법 확인
 * 1. 액션함수를 사용해서 1씩 증가하는 방법
 * 2. Thunk를 사용하여 1씩 증가하는 방법
 * state : num,  thunkNum
 * action : "ADD_NUM"
 * 
 */


const initialState = {
  num : 0,
  thunkNum : 0
}


//action 함수
export const addNum = () =>(
  {type : "ADD_NUM"}
);

//Thunk미들웨어를 사용한 액션 함수
/**
 *  dispatch를 이용해서 액션값을 리듀서에 전달할때 
 *  액션객체가 아닌 함수 일 경우 실행된다
 *  return 값에 들어가는 함수의 매개변수로 next/dispatch로 사용
 */

//순서대로 실행시켜줌
export const addNumThunk = () => (next) =>{
  next({type : "ADD_THUNKNUM"});
  console.log("Thunk를 이용하여 실행");
  next({type: "ADD_NUM"})
}

export const doubleNum = () => (next)=>{
  next({type:'ADD_NUM'});
  next({type:'ADD_NUM'});
}



function counterThunk(state=initialState, action){
  switch(action.type){
    case "ADD_NUM": 
      return {
        ...state,
        num : state.num +1
      }
    case "ADD_THUNKNUM":
      return{
        ...state,
        thunkNum : state.thunkNum + 1
      }
    default :
      return state
  }
}

export default counterThunk

