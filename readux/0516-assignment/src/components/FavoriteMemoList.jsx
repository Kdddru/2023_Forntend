import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFavorite } from '../modules/favoriteMemo';

export const FavoriteMemoList = () => {
  const dispatch = useDispatch();
  const favorite = useSelector((state)=>(
    state.favorite
  ))
  return (
    <div>
      <h1>FavoriteMemoList</h1>
      {favorite.map((f,i)=>(
        <div 
        key={f.id}
        > 
          <p>{f.id}</p>
          <p>{f.content}</p>
          <p>{f.date}</p>
          <button
          onClick={()=>{
            dispatch(deleteFavorite(i))
          }}
          >x</button>
        </div>
      ))}
    </div>
  )
}
