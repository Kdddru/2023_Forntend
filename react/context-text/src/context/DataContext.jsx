//DataContext는 값을  App에서 넣어주는 것이 아니라
//DataContext안에서 작성하는 방법

import React from 'react'
import { useState } from 'react';

const DataContext = React.createContext(null);

//App.js에서 값 전달할떄
//DataContext.provider를 이용하여 값 전달
//이 공간에서 값을 추가한 provider 작성 후 내보냄
//provider => 컴포넌트였음
//children = DataContext.provider 사이에 컴포넌트
const DataProvider = ({children}) =>{
  // 사용한 데이터 > useState()
  // 함수형 컴포넌트

  const [login, setLogin] = useState(true);
  const [name, setName] = useState('홍길동');

  // state로 작성한 값을 value에 넣기 
  const value ={
    state : { login, name} ,
    action : { setLogin, setName},
  }

  //return을 통해서 provider에서 쓰도록 내보내줌
  return (
  <DataContext.Provider value={value}>
    {children}
  </DataContext.Provider>)
}
//감싸서 값을 전달하기 위한 컴포넌트
export {DataProvider}
// 값을 가져오기위해 접근하는 값
export default DataContext


