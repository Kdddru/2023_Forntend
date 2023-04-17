import React, { useContext, useState } from 'react'
import DataContext from './DataContext'

export const DataBox = () => {
  return (
    <div>
      <DataText/>
    </div>
  )
}

function DataText (){
  const value = useContext(DataContext);

  const [inputValue, setInputValue] = useState(``);


  return(
    <div>
      {value && <h3>{value.state.name}</h3>}
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
