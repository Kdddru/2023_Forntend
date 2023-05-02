import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faAddressBook, faNewspaper, faHeart, } from '@fortawesome/free-solid-svg-icons'

export const IconComp = () => {
  return (
    <div className='icon-box'>
      <FontAwesomeIcon
        icon={faBell}
        className='icon-style'
      />
      <FontAwesomeIcon
        icon={faAddressBook}
        className='icon-style'
      />
      <FontAwesomeIcon
        icon={faNewspaper}
        className='icon-style'
      />
      <FontAwesomeIcon
        icon={faHeart}
        className='icon-style'
      />

    </div>
  )
}
