import React from 'react'
import { styled } from 'styled-components'



const Title = styled.h1`
  color : blue;
  background-color : yellow;
`;

const StyleComp = (props) => {
  return (
    <div>
      <Title>{props.children}</Title>
    </div>
  )
}

export default StyleComp