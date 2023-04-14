import React from 'react'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import ObjectContext from '../context/ObjectContext'
import DataContext from '../context/DataContext'

export const Toolbar = () => {
  return (
    <div>
      <MyButton/>
    </div>
  )
}

function MyButton (props){
  const context = useContext(ThemeContext);
  const user = useContext(ObjectContext);
  //DataContext에서 작성한 value의 값
  // {state : {name,login}, action : {set~}}
  const value = useContext(DataContext);

  return(
    <div>
      {user && <button>{user.name}의 버튼입니다</button>}
      {value && <button>{value.state.name}의 버튼입니다</button>}
    </div>
  )
}
