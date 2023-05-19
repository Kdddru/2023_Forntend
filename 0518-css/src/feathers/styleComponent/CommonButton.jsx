import React from 'react'
import { styled } from 'styled-components'

const Button = styled.a`
  display : inline-block;
  padding : 5px 7px;
  border-radius : 3px;
  background-color : blue;
  color : ${props => props.color};
`

export default function CommonButton({children, ...rest}){
  

  return (
    <div>
    <Button {...rest}>
      {children}
    </Button>
    </div>
  )
}
