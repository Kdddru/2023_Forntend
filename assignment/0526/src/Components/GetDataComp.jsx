import React, { useEffect, useState } from 'react'

import { collection, getDocs } from "firebase/firestore";
import { db } from '../data/firebase' 

export const GetDataComp = () => {
  const [data, setData] = useState(null);

  //데이터 넣을 배열
  let dataArray =[]
  
  //데이터 들고오기
    const getData = async() =>{
    const querySnapshot = await getDocs(collection(db, "readingbooks"));
    querySnapshot.forEach((doc) => {
      dataArray.push(
        {
          id : doc.id,
          ...doc.data()
        }
      )
      console.log(`${doc.id} => ${doc.data()}`);
    });
    setData(dataArray);
  }

  useEffect(()=>{
    getData();
  },[])


  return (
    <ul>
      { data && data.map((d)=>(
        <li key={d.id}>
          <p>{d.booktitle}</p>
        </li>
      ))}
    </ul>
  )
}
