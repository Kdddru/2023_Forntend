import logo from './logo.svg';
import './App.css';
import PorpsComp from './components/PorpsComp';
import CountComp from './components/CountComp';
import CountPropsComp from './components/CountPropsComp';
import LoginComp from './components/LoginComp' ;
import RefDomEvent from './components/refDom';
import MemoComp from './components/memoComp';

function App() {
  return (
    <div>
        <PorpsComp color='red'>props값을 받아와서 글자색을 바꿉니다</PorpsComp>
        {/** state을 사용한는 클래스 컴포넌트
        버튼을 클리할때마다 10씩 증가하는 컴포넌트
         */}
        
        <CountComp>

        </CountComp>
        {/** props,state을 사용하는 컴포넌트
          props의 num값을 가져와서 버튼을 클릭할때마다 num씩 증가
         */}
        <CountPropsComp num={5}/>
        {/*
        *loginComp 작성후 
        *state : name ,   loign ; false
        * input에서 name 받아오기
        * <button>에서 login true;
        * <h1> name출력
        */}
        <LoginComp/>
        <RefDomEvent/>
        <MemoComp/>
    </div>
  );
}

export default App;
