

const initalState = [
  {
    id : 1,
    text : "첫번째 메모입니다",
    date: "2023-05-12",
  },
  {
    id : 2,
    text : "두번째 메모입니다",
    date: "2023-05-12",
  },
]


//액션 생성 함수
// : {text, date}을 가져와야함
export const addMemo = (memo)=>(
  {type : "ADD_MEMO", payload : memo}
);

//리듀서
export default function memo(state=initalState, action){
  switch(action.type){
    case "ADD_MEMO":
      const newMemo = {
        ...action.payload,
        id : 3
      }
      const newMemoList = state.concat(newMemo);
      return newMemoList
    
    default :
      return state
  }
}



