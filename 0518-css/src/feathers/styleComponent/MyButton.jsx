import React from 'react'
import { styled } from 'styled-components'

const Button = styled.h1`
  padding : 10px 15px ;
  color : red;
  background-color :  black;
`

/**
 *  const TomatoBtn = styled(button)`
 *  styleTag
 *  `
 * 
 */

// rest => prop의 나머지
export default function MyButton({children, ...rest}){
  return (
    <div>
      <Button {...rest}>{children}</Button>
    </div>
  )
}
