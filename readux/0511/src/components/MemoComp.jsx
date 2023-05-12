import React from 'react'
import { useSelector } from 'react-redux'

export const MemoComp = () => {
  const memo = useSelector((state)=>(state.memo))
  return (
    <div>
      <h1>MemoComp</h1>
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
