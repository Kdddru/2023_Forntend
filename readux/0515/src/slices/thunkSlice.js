//Toolkit에서 thunk 미들웨어 제공
import { createSlice } from "@reduxjs/toolkit";
import { increment } from "./counterSlice";

const thunkSlice = createSlice({
  name:"thunk",
  initialState:{
    value :4,
  },
  reducers:{
    addValue : (state)=>{
      state.value +=1
    },
  }
})
// middleWare
// dispatch/next
export const addValueAsync = ()=>(dispatch)=>{

  setTimeout(()=>{
    dispatch(addValue());
    dispatch(increment());
  },1000)
  
}

export const { addValue } = thunkSlice.actions

export default thunkSlice.reducer