import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavHeader = () => {
  return (
    <div>
      <NavLink to={`/`} 
      style={({isActive})=>(isActive ? {color:'green'} : undefined)}>
      Home</NavLink>
      <NavLink to={`/storylist`}
      style={({isActive})=>(isActive ? {color:'green'} : undefined)}
      >Story</NavLink>
    </div>
  )
}
