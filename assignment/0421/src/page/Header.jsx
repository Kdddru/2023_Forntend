import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './style/header.css'


export const Header = () => {

  return (
    <div>
      <ul>
        <NavLink to={`/home`} className={({isActive})=>(
          isActive ? `header-Link` : undefined
        )}>Home</NavLink>
        <NavLink to={`/story`} className={({isActive})=>(
          isActive ? `header-Link` : undefined
        )}>Story</NavLink>
      </ul>
      <hr/>
      <Outlet/>
    </div>
  )
}
