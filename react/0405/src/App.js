import './App.css';
import ArrowComp from './components/ArrowComp';
import ArrowState from './components/ArrowState';

function App() {
  return (
    <div className="App">
      <ArrowComp text='나는 바보입니다'/>
      {/*<ArrowComp text='나는 바보입니다'>children으로 전달</ArrowComp>*/}
      {/**함수형 컴포넌트 실습
            name ="green" : h3 태그 출력
            check ={true} : check값이 true일때 출력
            children : '환영합니다' : p태그로 출력
      */}
      <ArrowComp name='green' check = {true} >환영합니다</ArrowComp>
      <ArrowState/>
    </div>
  );
}

export default App;
