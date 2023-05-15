import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMemoRedux, addMemoToolkit, deleteMemoRedux, deleteMemoSplice } from '../slices/memoSlice';

export const MemoComp = () => {
  const memo = useSelector((state)=>(state.memo));
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <h1>MemoComp</h1>
      {memo.map((m,i)=>(
        <div key={m.id}>
          <p>{m.date}</p>
          <p>{m.text}</p>
          <button
          onClick={()=>{dispatch(deleteMemoRedux(m.id))}}
          >x</button>
          <button
          onClick={()=>{dispatch(deleteMemoSplice(i))}}
          >index-x</button>
        </div>
      ))}
      <input type='text'
        value={inputValue}
        onChange={(e)=>{setInputValue(e.target.value)}}
      />

      <button
      onClick={()=>{
        dispatch(addMemoRedux({text:inputValue ,date:"2023-05-13"}))
        setInputValue('')
        }}
      >추가</button>
      <button
      onClick={()=>{
        dispatch(addMemoToolkit({text:inputValue ,date:"2023-05-13"}))
      }}
      >툴킷 추가</button>
    </div>
  )
}
