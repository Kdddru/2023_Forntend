//Thunk와 비동기함수 연습

//이전의 부산먹거리 api를 들고와서 추가하기
//action.type 추가 필요 : getFood



const initialState = {
  food : null 
}

export const getFood = () => (next) =>{

}

function  foodThunk(state = initialState, action){
  switch(action.type){
    case "getFood" : 
    return{
      ...state,
      food : ""
    }
  }
}