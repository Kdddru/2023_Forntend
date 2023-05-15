import { createSlice } from "@reduxjs/toolkit";


export const counterSlice =createSlice({
  name: "counter",
  initialState:{
    value : 0,
  },
  reducers: {
    increment : (state) => {
      state.value+=1 ;
    },
    //return을 사용하면 이전방식으로 사용하여 값을 저장할수있다
    decrement: (state) => {
      return{ value : state.value-1}
    },
    incrementByAmount : (state,action) =>{
      state.value += action.payload
    },
    decrementByAmount : (state,action) =>{
      state.value -= action.payload
    }
  }
})

export const { increment, decrement,incrementByAmount, decrementByAmount} = counterSlice.actions

export default counterSlice.reducer