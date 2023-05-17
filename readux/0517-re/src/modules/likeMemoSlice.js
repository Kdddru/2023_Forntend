import { createSlice } from "@reduxjs/toolkit";

export const likeMemoSlice = createSlice({
  name : 'likeMemo',
  initialState :[
    {
      id : 2,
      text :'두번째 메모입니다',
      date: '2023-05-17',
      isLike : true
    },
  ],
  reducers: {
    toggleLike : (state, action)=>{
      //버튼클릭후 가져오기
      //action.payload로 memo값을 받아와 넣기
      if(state.find((like)=>(like.id === action.payload.id))){
        return state.filter((like)=>(like.id !== action.payload.id))
      }
      else{
        state.push(action.payload)
      }
    },
  }
})

export const {toggleLike} = likeMemoSlice.actions
export default likeMemoSlice.reducer