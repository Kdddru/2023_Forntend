import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMemo, deleteMemo } from '../modules/memoSlice';
import { addFavorite } from '../modules/favoriteMemo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export const MemoList = () => {
  const dispatch = useDispatch();
  const memo = useSelector((state)=>(
    state.memo
  ))


  const [inputValue, setInputValue] = useState('');
  
  const [ischeck, setIscheck] = useState(false);

  return (
    <div>
      <h1>MemoList</h1>
      <form onSubmit={(e)=>{
        e.preventDefault()
        dispatch(addMemo({
          content : inputValue,
          date : '2023-05-15'
        }));
        setInputValue('');
      }}>
        <input
          value={inputValue}
          onChange={(e)=>{
            setInputValue(e.target.value);
          }}
        />
        <button
        type='submit'
        >추가</button>
      </form>
      {memo.map((m,i)=>(
        <div key={m.id}>
          <p>{m.id}</p>
          <p>{m.content}</p>
          <p>{m.date}</p>
          <button
          onClick={()=>{
            dispatch(addFavorite(m))
            setIscheck((e)=>!e)
          }}
          >
            <FontAwesomeIcon
            style={ischeck&&{color : '#ff0000'}}
            icon={faHeart}/>
          </button>
          <button
          onClick={()=>{
            dispatch(deleteMemo(i))
          }}
          >x</button>
        </div>
      ))}
    </div>
  )
}
