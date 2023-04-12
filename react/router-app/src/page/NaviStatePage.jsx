import React from 'react'
import { useLocation } from 'react-router-dom'

//navigate를 통해서 전달한 값을 받아와서 사용
//useLocation을 통해서 값을 전달받음


export const NaviStatePage = () => {

  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h3>받아온 값입니다 : {location.state}</h3>
    </div>
  )
}
