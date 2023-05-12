import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMemo } from '../modules/memo'

export const MemoComp = () => {
  const memo = useSelector((state)=>(state.memo))
  const dispatch = useDispatch();

  const [input, setInput] = useState();


  const onAddMemo = (e) =>{
    e.preventDefault();
    dispatch(addMemo(
          {text : input, date: "2023-05-12"}
        ))
        setInput('');
  }


  return (
    <div>
      <h1>MemoComp</h1>
      <form onSubmit={onAddMemo}>
        <input type='text'
          onChange={(e)=>{setInput(e.target.value)}}
          value={input}
        />
        <button type='submit' >메모추가</button>
      </form>
      {memo.map((m)=>(
        <div key={m.id}>
          <span>{m.id}</span><br/>
          <span>{m.date}</span>
          <p>{m.text}</p>
        </div>
      ))}
    </div>
  )
}