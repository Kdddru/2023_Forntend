import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NavigatePage = () => {

  const navigate = useNavigate();


  return (
    <div>
      <button onClick={()=>{
        //두번째 인자값은 객채형태
        //값이 많을때 객채형태로
        navigate('/navigate/state',{state:10});
      }}>
        숫자값 10 전달
      </button>
    </div>
  )
}
