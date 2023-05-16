import { createSlice } from "@reduxjs/toolkit"

export const memoSlice = createSlice(
  {
    name : "memo",
    initialState: [],
    reducers:{
      addMemo : (state, action)=>{
        const newMemo = {
          ...action.payload,
          id : state.length
        }
        const newMemoList = state.concat(newMemo);

        return newMemoList
      },
      deleteMemo : (state, action)=>{
        state.splice(action.payload,1)
      }
    }
  }
)

export const {addMemo, deleteMemo} = memoSlice.actions
export default memoSlice.reducer