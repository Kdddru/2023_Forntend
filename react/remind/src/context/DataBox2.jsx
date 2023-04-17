import React, { useContext, useState } from 'react'
import DataContext from './DataContext';

export const DataBox2 = () => {
  return (
    <div>
      <DataPrint/>
    </div>
  )
  
}

function DataPrint(){
  const value = useContext(DataContext);

  const [inputValue,  setInputValue] =useState(``);

  return(
    <div>
    <hr/>
      <input type='text'
        onChange={(e)=>{
          setInputValue(e.target.value)
        }}
        value={inputValue}
      />
      <button
      onClick={()=>{
        value.action.setName(inputValue)
        setInputValue(``)
      }}
      >바꾸기!</button>
    </div>
  )
}
