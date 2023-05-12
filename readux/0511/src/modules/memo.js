

//초기 state값
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

let id = 3;


//액션 생성 함수
// : {text, date}을 가져와야함
export const addMemo = (memo)=>(
  {type : "ADD_MEMO", payload : memo}
);

//메모 아이디값 들고옴
export const DeleteMemo = (id)=>(
  {type : "DELETE_MEMO", payload : id}
);

//리듀서
export default function memo(state=initalState, action){
  switch(action.type){
    case "ADD_MEMO":
      const newMemo = {
        ...action.payload,
        id : id
      }
      id++
      const newMemoList = state.concat(newMemo);
      return newMemoList
    case "DELETE_MEMO" :
      const deleteMemoList = state.filter((memo)=>(
        memo.id !== action.payload
      ))
      return deleteMemoList
    default :
      return state
  }
}



