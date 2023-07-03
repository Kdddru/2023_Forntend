import React, { useEffect, useState } from 'react'


import { collection, getDocs, addDoc, Timestamp, doc, deleteDoc, updateDoc, query, where  } from "firebase/firestore";
import { db } from '../data/firebase'
import { Link } from 'react-router-dom';

function getdays(){
  const date = new Date();
  const year = date.getFullYear();
  const day = date.getDay();
  const dates = date.getDate();

  return `${year}년 ${day}월 ${dates}일`
}

console.log(getdays());


export const Main = () => {
  // 데이터 저장할 공간
  const [booktitle, setBookTitle] = useState('');
  const [writer, setWriter] = useState('');
  //검색 값
  const [search, setSearch] =useState('');
  //검색 결과값
  const [searchResult, setSerchResult] = useState('');
  
  
  //가져온 데이터 넣을 공간
  const [data, setData] = useState(null);
  
  //데이터 넣을 배열
  let dataArray =[];
  
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


  //값 추가
  const addData = async() =>{
    try {
      const docRef = await addDoc(collection(db, "readingbooks"), {
        booktitle,
        writer,
        done : false,
        startDate: Timestamp.fromDate(new Date()),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    getData();
    setBookTitle('');
    setWriter('');
  }

  //값 삭제
  const deleteData = async(id) =>{
    await deleteDoc(doc(db, "readingbooks", id));
    getData();
  }

  //값 수정
  const reData = async(id) =>{
    const value = prompt("느낀점을 입력하세요","");
    const washingtonRef = doc(db, "readingbooks", id);
    await updateDoc(washingtonRef, {
        done : true,
        memo : value
    });
    getData();
  }
  //검색
  const onSearch = async(e) =>{
    e.preventDefault();
    const q = query(collection(db, "readingbooks"), where("booktitle", "==", search));
    let searchArray =[];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      searchArray.push(
        { 
          id : doc.id,
          ...doc.data()
        }
      )
      console.log(doc.id, " => ", doc.data());
    });
    setSerchResult(searchArray);
    setSearch('');
  }

  return (
    <div style={{textAlign:'center',}}>
      <h1>readingbooks 컬렉션</h1>
      <Link to={`/login`}>로그인</Link>
      <div>
      {/** 데이터 추가 공간 */}
        <h1>책 추가</h1>
        <label htmlFor="">책 이름</label>
        <input type="text" 
          value={booktitle}
          onChange={(e)=>{setBookTitle(e.target.value)}}
        /><br/>
        <label htmlFor="">작가 이름</label>
        <input type="text"
          value={writer}
          onChange={(e)=>{setWriter(e.target.value)}}
        /><br/>
        <button
        onClick={addData}
        >추가</button>
      </div>
      <hr/>
      <form onSubmit={onSearch}>
        <input type="text" 
        value={search}
        onChange={(e)=>{setSearch(e.target.value)}}/>
        <input type="submit" />
      </form>
      <ul>
        {searchResult&& searchResult.map((d)=>(
          <li key={d.id}>
            <p>{d.startDate.toDate().getDay()}/{d.startDate.toDate().getDate()}</p>
            <p>{d.booktitle}</p>
          </li>
        ))}
      </ul>
      <hr/>
      {/** 출력공간 */}
      <ul>
      { data && data.map((d)=>(
        <li key={d.id}>
          <p>{d.startDate.toDate().getDay()}/{d.startDate.toDate().getDate()}</p>
          <p>{d.booktitle}</p>
          <p>{d.memo && d.memo}</p>
          <button
            onClick={()=>reData(d.id)}
          >감상문 적기</button>
          <button
          onClick={()=>deleteData(d.id)}
          >x</button>
        </li>
      ))}
    </ul>
    </div>
  )
}
