import React from 'react'
import { useContext } from 'react'
import ThemeContext from './ThemeContext'

export const ContextBox = () => {
  return (
    <div>
      <ContextText/>
    </div>
  )
}

function ContextText(){
  // useContext() ThemeContext를 가져와서 출력

  const ThemeCon = useContext(ThemeContext);
  console.log(ThemeCon);

  return (
    <div>
      <p>{ThemeCon}</p>
    </div>
  )
}
