

const initalState = {
  count : 0,
  num : 1
}


export const increaseNumber = () =>(
  {type : "INCREASE_NUMBER"}
);
export const decreaseNumber = () =>(
  {type : "DECREASE_NUMBER"}
);
export const changeNumer = (num)=>(
  {type : "CHANGE_NUMBER", payload : num}
)


function counterNumber(state=initalState, action){
  switch(action.type){
    case "INCREASE_NUMBER": 
      return {...state,
        count : state.count + state.num
      };
    case "DECREASE_NUMBER":
      return {...state,
        count : state.count - state.num
      }
    case "CHANGE_NUMBER":
      return {
        ...state,
        num : action.payload
      }
    default :
      return state
  }
}


export default counterNumber