import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase,decrease, change } from '../modules/counter';

//리듀서 값을 사용 : useSelector
//리듀서에 있는 값을 수정 : useDispatch 

export const CounterBox = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state)=>(
    state.counter
  ))
  console.log(`Counter: ${counter}`);

  return (
    <div>
      <h1>CounterBox</h1>
      <p>{counter}</p>
      <div>
        <button
        onClick={()=>{
          dispatch((change(-30)))
        }}
        >
          -30
        </button>
        <button
        onClick={()=>{
          dispatch(change(-5))
        }}
        >
          -5
        </button>
        <button
        onClick={()=>{
          dispatch(decrease())
        }}
        >
          -
        </button>
        <button
        onClick={()=>{
          dispatch(increase())
        }}
        >
          +
        </button>
        <button
        onClick={()=>{
          dispatch(change(5))
        }}
        >
          +5
        </button>
        <button
        onClick={()=>{
          dispatch((change(30)))
        }}
        >
          +30
        </button>
      </div>
    </div>
  )
}
