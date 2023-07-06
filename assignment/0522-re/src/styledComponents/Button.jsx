import React from 'react'
import { styled } from 'styled-components'


const StyledBtn = styled.button`
  border : none;
  padding: 5px 12px;
  border-radius : 5px;
  background-color : ${props=> props.color};
  color : white;
`

export const Button = ({children, ...rest}) => {
  return (
    <StyledBtn {...rest}>{children}</StyledBtn>
    )
  }
  
  Button.defaultProps = {
    color : "blue"
  }

