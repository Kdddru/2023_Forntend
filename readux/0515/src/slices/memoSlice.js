import { createSlice } from "@reduxjs/toolkit";


export const memoSlice = createSlice({
  name:"memo",
  initialState:[
    {
      id : 1,
      text : "첫번째 메모입니다",
      date: "2023-05-15",
    },
  ],
  reducers: {
    addMemoRedux : (state,action)=>{
      const newMemo = {
        ...action.payload,
        id : state.length+1
      }
      const newMemoList = state.concat(newMemo);

      return newMemoList
    },
    addMemoToolkit : (state,action) =>{
      const newMemo = {
        ...action.payload,
        id : state.length+1,
      }
      state.push(newMemo);
    },
    deleteMemoRedux : (state, action)=>{
      const newMemoList = state.filter((m)=>
        (m.id !== action.payload)
      )
      return newMemoList
    },
    deleteMemoSplice : (state, action)=>{
      state.splice(action.payload,1)
    }
  }
})


export const{ addMemoRedux, addMemoToolkit, deleteMemoRedux, deleteMemoSplice } = memoSlice.actions
export default memoSlice.reducer