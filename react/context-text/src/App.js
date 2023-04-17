import './App.css';
import React from 'react';
import { Toolbar } from './components/Toolbar';
import ThemeContext from './context/ThemeContext';
import ObjectContext from './context/ObjectContext';
import { DataProvider } from './context/DataContext';
import { ContextBox } from './context/ContextBox';
import { DataBox } from './context/DataBox';
import { DataPrint } from './context/DataPrint';

//App에서 쓰기 위해, App에서 React.createContext 호출
//ObjectContext.provider의 value값을 따로 변수에 저장해서 사용
// >> 변수의 값이 많다면 확인하기 힘들다
// >> context를 만들때, value값도 함께 작성해서 만들자!

const initValue = {name:'홍길동', login:true}

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value='light'>
        <ObjectContext.Provider value={initValue}>
          <Toolbar/>
        </ObjectContext.Provider>
      </ThemeContext.Provider>

      <DataProvider>
        <Toolbar/>
      </DataProvider>
      {/** ContextBox를 가져와서 ThemeContext를 이용하여 blue값 전달 */}
      <ThemeContext.Provider value='blue'>
        <ContextBox/>
      </ThemeContext.Provider>

      {/** 
      DataContext를 이용해서 value값을 전달한
      DataProvider사용
       */}
      <DataProvider>
        <DataBox/>
        {/** <DataPrint/>를 작성하여 화면에 출력 */}
        <DataPrint/>
      </DataProvider>
    </div>
  );
}

export default App;
