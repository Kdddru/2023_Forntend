import { Route, Routes } from 'react-router-dom';
import { Home } from './page/Home';
import { Boardlist } from './page/Boardlist';
import { BoardForm } from './page/BoardForm';
import { LoginForm } from './page/LoginForm';
import { Board } from './page/Board';
//import { ColorSchemesExample } from './components/ColorSchemesExample';


// bootstrap css 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavHeader } from './components/NavHeader';
import { useState } from 'react';

function App() {
/**
   * 상위 컴포넌트에서 데이터를 작성하고 props값을 전달
   * 상위 데이터값을 하위에서 공유하기 때문에 동일한 값이 출력
   */
//user data

//값이 없을때 null사용
//속성에 접근해서 사용하지 않도록 조심
//[]일때 초기값이 null, ''같은경우 map메소드 사용 x

// {name:'green'}
const [user, setUser] = useState(
  null
);

const [boardlist, setBoardlist] = useState(
  [
    {
      id:1,
      title : '첫번째 게시물',
      content : '게시물의 내용을 작성합니다',
      name : 'green',
      date : '2023-04-27'
    },
    {
      id:2,
      title : '두번째 게시물',
      content : '게시물의 내용을 작성합니다',
      name : 'blue',
      date : '2023-04-27'
    }
  ]
);



  return (
    <div className="App">
        <NavHeader user={user}/>   
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/boardlist' element={<Boardlist boardlist={boardlist}/>}/>
          <Route path='/boardlist/:id' element={<Board boardlist={boardlist}/>}/>
          <Route path='/boardform' element={<BoardForm/>}/>
          <Route path='/loginform' element={<LoginForm setUser={setUser}/>}/>
        </Routes>
    </div>
  );
}

export default App;
