import React from 'react'
import { useContext } from 'react'
import DataContext from './DataContext'
import { useState } from 'react';


// DataPrint 컴포넌트에서 
// DataContext를 받아와서 name을 수정할 수 있게 하기
export const DataPrint = () => {
  const context = useContext(DataContext);
  const [Input, setInput] = useState('')
  return (
    <div>
      <input type='text'
      value={Input}
        onChange={(e)=>{
          setInput(e.target.value);
        }}
      />
      <button
      onClick={()=>{
        context.action.setName(Input);
        setInput('');
      }}
      >이 버튼을 누르면 DataBox에 출력되는 값이 수정</button>
    </div>
  )
}
