import React, { useState } from 'react'
import data from '../data/dummy.json'
import { Link } from 'react-router-dom';

export const Boardlist = () => {
  const [dataList, setDataList] = useState(data);
  return (
    <div>
      boardlist
      {dataList.map((data)=>(
        <li>{data.id}<Link to={`/boardlist/${data.id}`}>{data.title}</Link> </li>
      ))}
    </div>
  )
}


