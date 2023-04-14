import React from 'react'
import { Link } from 'react-router-dom'

export const NavHeader = () => {
  return (
    <div>
      <Link to={`/`}>Home</Link>
      <Link to={`/boardlist`}>Board</Link>
    </div>
  )
}
