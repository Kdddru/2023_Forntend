import React from 'react'
import { styled } from 'styled-components'
import CommonButton from './CommonButton'

const ButtonText = styled(CommonButton)`
${(props)=>{
  switch(props.mode){
    case "dark": 
      return `
      background-color : dark;
      `    
    case "light":
      return `
      background-color : white;
      `
    default : return `background-color : blue`
  }
}}
`


export default function SpecialButton({children, ...rest}) {

  return (
    <div>
      <ButtonText {...rest}>ㅎㅇ</ButtonText> 
    </div>
  )
}
