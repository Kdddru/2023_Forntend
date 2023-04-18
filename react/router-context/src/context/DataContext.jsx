import React from 'react'
import { useState } from 'react';
import dummy from '../data/dummy.json'

const DataContext = React.createContext(``);

//데이터 값을 가진 Provider컴포넌트 작성
//DataContext에 들어갈 value값의 특징
// 2개이상의 페이지 컴포넌트에서 사용할 때 작성
//:페이지 컴포넌트 - path로 연결된 컴포넌트

const DataProvider = ({children}) =>{
  const[boardlist, setBoardlist] = useState(dummy);


  const[id, setId] = useState(4);

  //user값 을 사용하기 위해 useState() 작성
  const [user, setUser] = useState(
    {writer:'익명', login:false}
  );


  const value ={
    state : {boardlist ,id, user},
    action : {setBoardlist, setId, setUser}
  }

  return(
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}

export {DataProvider}

export default DataContext