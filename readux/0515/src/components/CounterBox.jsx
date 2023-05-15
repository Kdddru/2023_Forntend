import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, decrementByAmount, increment, incrementByAmount } from '../slices/counterSlice';

export const CounterBox = () => {
  const dispatch = useDispatch();
  const counter =  useSelector((state)=>(
    state.counter.value
  ))

  const [num, setNum] = useState(1);
  return (
    <div>
      <h1>CounterBox</h1>
      <p>{counter}</p>

      <button
      onClick={()=>{dispatch(increment())}}
      >+</button>
      <button
      onClick={()=>{dispatch(decrement())}}
      >-</button>

      <br/>
      <input type='number' onChange={(e)=> 
      setNum(e.target.value)}/>
      <br/>

      <button
      onClick={()=>{dispatch(incrementByAmount(parseInt(num)))}}
      >+{num}</button>
      <button
      onClick={()=>{dispatch(decrementByAmount(parseInt(num)))}}
      >
        -{num}
      </button>
    </div>
  )
}
