import React, { useState } from 'react'
import { collection, addDoc, Timestamp } from "firebase/firestore";

import { db } from '../data/firebase'

export const AddDataComp = () => {
  //값 추가할 inputvalue들
  const [booktitle, setBookTitle] = useState('');
  const [writer, setWriter] = useState('');

  //값 추가
  const addData = async() =>{
    try {
      const docRef = await addDoc(collection(db, "readingbooks"), {
        booktitle,
        writer,
        memo : '',
        done : false,
        startDate: Timestamp.fromDate(new Date()),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  


  return (
    <div>
      <h1>책 추가</h1>
      <label htmlFor="">책 이름</label>
      <input type="text" 
        onChange={(e)=>{setBookTitle(e.target.value)}}
      /><br/>
      <label htmlFor="">작가 이름</label>
      <input type="text"
        onChange={(e)=>{setWriter(e.target.value)}}
      /><br/>
      <button
      onClick={addData}
      >추가</button>
    </div>
  )
}
