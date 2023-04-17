import React, { useContext, useState } from 'react'
import data from '../data/dummy.json'
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';

export const Boardlist = () => {
  //const [dataList, setDataList] = useState(data);

  const value = useContext(DataContext);
  

  return (
    <div>
      boardlist
      {value.state.boardlist.map((data)=>(
        <li key={data.id}>{data.id}<Link to={`/boardlist/${data.id}`}>{data.title}</Link> </li>
      ))}
    </div>
  )
}


