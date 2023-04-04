
import './App.css';
import MyComponent from './components/Mycomponent';
import TextComp from './components/TextComp';

//2가지 컴포넌트
import LoginComp from './components/LoginComp';

import OtherComp from './components/OtherComp';

import StateComp from './components/StateComp';
import EventComp from './components/EventComp';

import RefDomEvent from './components/refDom';
import MapCamp from './components/mapComp';
import LifeSycle from './components/LifeSycle';

function App() {
  return (
    <div className="App">
    <h1>리액트 프로젝트를 수정해서 사용합니다</h1>
    <MyComponent />
    <LoginComp login={false} name ="홍길동" />
    {/** 내용전달이 props의 children으로 */}
    {/** props값을 전달하지 않으면 undefined*/}
    <LoginComp>내용전달</LoginComp>  
    {/**새로운 TextComp */}
    <TextComp name='홍길동'>반갑습니다</TextComp>
    <TextComp name='성춘향'>반갑습니다</TextComp>
    <OtherComp></OtherComp>
    <StateComp></StateComp>
    <EventComp/>
    <LoginComp/>
    <RefDomEvent/>
    <MapCamp/>
    <LifeSycle/>
    </div>
  );
}

export default App;
