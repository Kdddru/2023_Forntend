import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from '../components/DataContext';

export const Fruit = (props) => {
  const {id} = useParams();

  const value = useContext(DataContext);
  const {state} = value;
  const fruits = state.fruits;

  console.log(fruits);
  
  //find == 특정한 배열안의 값을 들고온다
  const selectFruits =fruits.find((fruit)=>(
    fruit.name === id
  ))
  
  console.log(selectFruits);

  return (
    <div>
      <h3>{id}-Story</h3>
      <img src={selectFruits.picture} alt='' width={500} height={500}/>
      <p>
        {selectFruits.detail}
      </p>
    </div>
  )
}
