import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

const StyleLink = styled(Link)`
  font-size : 1.2rem;
  font-weight : bold;
  color : orange;
  text-decoration : none;
`


export default function MyLink({children, ...rest}) {

  return (
    <div>
      <StyleLink {...rest} to={'/about'}>
        MyLink
      </StyleLink>
    </div>
  )
}

