import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../context/DataContext'

export const NavHeader = () => {
  const {state} =useContext(DataContext); 
  return (
    <div>
      <Link to={`/`}>Home / </Link>
      <Link to={`/boardlist`}>Board / </Link>
      <Link to={`/boardwriteform`}>boardwriteform / </Link>
      <Link to={`/image`}>Img /</Link>
      {
        state.user.login ? <Link to={`/mypage`}>
        <span>{state.user.writer}</span>의 페이지  
        </Link> 
        :<Link to={`/loginForm`}>Login</Link>
      }
    </div>
  )
}
