import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addValue, addValueAsync } from '../slices/thunkSlice';

export const ThunkBox = () => {
  const thunkCounter = useSelector(
    (state)=>(state.thunkCounter)
  )

  const dispatch = useDispatch();
  console.log(thunkCounter);
  return (
    <div>
      <h1>ThunkBox</h1>
      <p>{thunkCounter.value}</p>
      <button
      onClick={()=>{dispatch(addValue())}}
      >+</button>
      <button
      onClick={()=>{dispatch(addValueAsync())}}
      >1초뒤</button>
    </div>
  )
}
