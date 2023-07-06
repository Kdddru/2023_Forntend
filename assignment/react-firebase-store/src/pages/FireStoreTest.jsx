import React, { useEffect, useState } from 'react'
import { collection, addDoc, getDoc ,getDocs, doc, updateDoc, deleteDoc, query, where  } from "firebase/firestore";
import { db } from '../data/firbase';

export const FireStoreTest = () => {
  //파이어 스토어에서 가져온 값 출력
  const [users, setUsers] = useState(null);
  
  //저장할 값의 state
  const [first, setFirst] = useState(``);
  const [last, setLast] = useState(``);
  const [born, setBorn] = useState(``);

  //수정할 값의 state
  const [upDateFirst, setUpdateFirst] = useState(``);
  
  //검색할 last 값
  const [searchLast, setSearchLast] = useState(``);

  //검색된 state
  const [searchUser, setSearchUser] = useState(``);

  //user id값이 문서의 id 값일때 값을 찾아 올 수 있게끔
  useEffect(()=>{
    const getUserData = async() => {
      const querySnapshot = await getDoc(doc(db, "userList" , 'trv8X7lL06MgLyOxyJj76EmeYKz2'));
      console.log(`유저UID와 같은 컬렉션 : ${querySnapshot.data().boardlist}`); 
        
      
    }
    getUserData();
  },[])

  //파이어 스토어에서 가져온 값 배열에 담기
  let dataArray = [];

  useEffect(()=>{
    getData();
  },[])

  //파이어 베이스에서 데이터 들고오기 & dataArray에 저장
  async function getData(){
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      dataArray.push(
        { 
          id : doc.id , 
          ...doc.data()
        }
        );
      
      console.log(`${doc.id} => ${doc.data()}`);
    });
    setUsers(dataArray);
  }
  
  // 파이어 베이스에 값저장 함수
  const addDocData = async() => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first,
        last,
        born: parseInt(born)
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    getData();
    setFirst(``);
    setLast(``);
    setBorn(``);
  }
  //데이터 삭제
  const deleteData = async(id) =>{
    await deleteDoc(doc(db, "users", id));
    getData();
  }
  
  //데이터 수정
  const upDateData = async(id) =>{

    await updateDoc(doc(db,"users",id), {
      first : upDateFirst
    });

    getData();
  }

  //검색
  const onSearch = async()=>{
    const q = query(collection(db, "users"), where("last", "==", searchLast), where("born",">",2012));

    const querySnapshot = await getDocs(q);
    let dataArray = []
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      dataArray.push({
        id : doc.id,
        ...doc.data()
      })
    });
    setSearchUser(dataArray)
  }

  return (
  <div>
      <h1>FireStoreTest</h1>
      <label htmlFor="">first</label>
      <input type='text' value={first}
      onChange={(e)=>{setFirst(e.target.value)}}/>
      <br/>
      <label htmlFor="">last</label>
      <input type='text' value={last}
      onChange={(e)=>{setLast(e.target.value)}}/>
      <br/>
      <label htmlFor="">born</label>
      <input type='number' value={born}
      onChange={(e)=>{setBorn(e.target.value)}}/>
      <button
      onClick={addDocData}
      >값추가</button>

      <label htmlFor="">last 검색</label>
      <input type="text" 
        onChange={(e)=>{setSearchLast(e.target.value)}}
      />
      <button
      onClick={onSearch}
      >검색</button>
      <hr/>
        {
          //검색 결과 공간
          searchUser && searchUser.map((user)=>(
            <div key={user.id}>{user.born} ,{user.last}, {user.first}</div>
          ))
        }
      <hr/>
      <p>users컬렉션 확인</p>
      {users && users.map((user)=>(
        <div key={user.id}>
          <p> {user.first} , {user.born}</p>
          <button
          onClick={()=>{deleteData(user.id)}}
          >x</button>
          <input type="text" 
            onChange={(e)=>{setUpdateFirst(e.target.value)}}
          />
          <button
            onClick={()=>{upDateData(user.id)}}
          >first값 수정</button>
        </div>
      ))}
    </div>
  )
}
