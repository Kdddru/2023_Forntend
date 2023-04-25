import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from '../context/DataContext';

export const Story = () => {
  //Param값들고오기
  const {name} = useParams();

  //context들고오기
  const {state} = useContext(DataContext);
  const {fruitlist} = state;
  
  const fruit = fruitlist.find((f)=>(
    name === f.name
    ))
    
  return (
    <div>
      <h3>{name}Story</h3>
      {
        fruit && (
          <div>
            <img src={fruit.picture} alt='' width={200} height={200}/>
            <p>{fruit.detail}</p>
          </div>
        )
      }
    </div>
  )
}
