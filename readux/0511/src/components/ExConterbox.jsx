import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase,decrease } from '../modules/counter'

export const ExConterbox = () => {

  //state값 들고오기
  const counter = useSelector((state)=>(
    state.counter
  ))
  console.log(`ExCounter: ${counter}`);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>ExConterbox</h1>
      <h3>{counter}</h3>
      <button
      onClick={()=>{
        dispatch(increase())
      }}
      >+</button>
      <button
      onClick={()=>{
        dispatch(decrease())
      }}
      >-</button>
    </div>
  )
}
