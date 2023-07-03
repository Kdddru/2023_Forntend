import React, { useContext } from 'react'
import DataContext from '../components/DataContext'
import { NavLink, Outlet } from 'react-router-dom';

export const Story = () => {
  const value = useContext(DataContext);

  const {state} = value;

  return (
    <div>
      <h1>StoryList</h1>
      <ul>
        {state.fruits.map((fruit)=>(
          <li key={fruit.name}>
            <NavLink to={`/story/${fruit.name}`}
            className={({isActive})=>(
            isActive ? `header-Link2` : undefined
            )}
            >{fruit.name}Story</NavLink>
          </li>
        ))}
      </ul>
      <Outlet/>
    </div>
  )
}
