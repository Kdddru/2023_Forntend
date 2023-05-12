import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNum, addNumThunk, doubleNum } from '../modules/counterThunk'


export const CounterThunk = () => {

  const counterThunk = useSelector((state)=>(
    state.counterThunk
  ))
  const dispatch = useDispatch();


  return (
    <div>
      <h1>CounterThunk</h1>
      <p>{counterThunk.num}</p>
      <p>{counterThunk.thunkNum}</p>

      <button
      onClick={()=>{dispatch(addNum())}}
      >리덕스액션함수</button>
      <button
      onClick={()=>{dispatch(addNumThunk())}}
      >
        리덕스 Thunck 액션함수
      </button>
      <button 
      onClick={()=>{dispatch(doubleNum())}}
      >2증가</button>
    </div>
  )
}
