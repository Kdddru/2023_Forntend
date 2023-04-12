import React from 'react'
import { useParams } from 'react-router-dom'



export const Article = () => {

const {id} = useParams();

  return (
    <div>
      Article {id}
      <p>집가고싶어요</p>
    </div>
  )
}
