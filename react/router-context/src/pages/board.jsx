import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import data from '../data/dummy.json'

export const Board = () => {
  const navigate =useNavigate();
  const{id} = useParams();
  const boardData = data.find((d)=>(d.id == id));

  return (
    <div>
      <div></div>
    </div>
  )
}
