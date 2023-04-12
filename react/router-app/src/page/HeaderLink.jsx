import React from 'react'
import '../css/headerlink.css'
import { Link, NavLink } from 'react-router-dom'

export const HeaderLink = () => {
  return (
    <div>
      <Link className='link-style' to={'/'}>Home</Link>
      <NavLink className={({isActive})=> 
        isActive ? 'link-style':undefined
      } to ={'/story2'} end>Story2</NavLink> {/**End 주소가 완전 일치할때만 class이름 추가 */}
    </div>
  )
}
