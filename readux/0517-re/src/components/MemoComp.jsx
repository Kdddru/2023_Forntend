import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMemo, deleteMemo, likeMemoRedux, likeMemoToolkit } from '../modules/memoSlice';
import { toggleLike } from '../modules/likeMemoSlice';

export const MemoComp = () => {
  const memo = useSelector((state)=>(
    state.memo
  ))
  const likeMemoList = useSelector((state)=>(
    state.likeMemo
  ))
  console.log(likeMemoList);
  const dispatch = useDispatch();

  const [input, setInput] = useState();
  const likeMemo = memo.filter((memo)=>(memo.isLike))

  return (
    <div>
      <h1>메모장</h1>
      <input type='text'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
      />
      <button
      onClick={()=>{
        dispatch(addMemo(input));
        setInput('');
      }}
      >추가</button>
      {memo.map((m,i)=>(
        <div key={m.id}>
          <h3>{m.text}</h3>
          <p>{m.date}</p>
          <button
          onClick={()=>{dispatch(likeMemoRedux(m.id))}}
          >{m.isLike ? "찜완료": "찜하기"}</button>
          <button
          onClick={()=>{
            dispatch(likeMemoToolkit({i,m}))
            }}
          >{m.isLike ? "찜완료": "찜하기"}</button>
          <button
          onClick={()=>{dispatch(toggleLike(m))}}
          >{likeMemoList.find((l)=>(l.id === m.id)) ? "🖤": "🤍"}
          </button>
          <button
          onClick={()=>(dispatch(deleteMemo(i)))}
          >x</button>
        </div>
      ))}
      <hr/>
      <h1>likeMemo로 확인</h1>
      {
        likeMemoList.map((memo)=>(
          <h3>{memo.text}</h3>
        ))
      }
      <hr/>
      <h1>즐겨찾기</h1>
      {
        likeMemo.map((memo)=>(
          <div>
            <h3>{memo.text}</h3>
            <p>{memo.date}</p>
          </div>
        ))
      }
    </div>
  )
}
