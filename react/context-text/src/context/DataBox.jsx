import React from 'react'
import { useContext } from 'react'
import DataContext from './DataContext';
import { useState } from 'react';

export const DataBox = () => {

  return (
    <div>
      <DataText/>
    </div>
  )
}


function DataText (){

  const value = useContext(DataContext);
  //context에 있는 이름이 바뀌게 작성
  const [input, setInput] = useState('');

  return(
    <div>
      {value && <h3>{value.state.name}</h3>}
      <button onClick={()=>{
        value.action.setName("Green")
      }}>버튼</button>
      <p><input type='text'
        onChange={(e)=>{
          setInput(e.target.value);
        }}
      /><button
      onClick={()=>{
        value.action.setName(input);
      }}
      >버튼</button></p>
    </div>
  )
}