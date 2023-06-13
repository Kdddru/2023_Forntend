import './App.css';
import { useCallback, useMemo, useState } from 'react';
import { StatusBar } from './components/StatusBar';
import { SavButton } from './components/SavButton';

function App() {
  const [input,setInput] = useState('');
  const [name, setName] = useState('');
  
  // 이름 길이 계산
  const countName = (name) =>{
    console.log('이름의 길이를 계산하는 중입니다');
    return name.length;
  }

  const memoCountName = useMemo(()=>countName(name),[name]);


  const onChange = useCallback((e)=>{
    setInput(e.target.value);
  },[name])

  const onClick = useCallback(()=>{
    setName(input);
  },[input]) 


  return (
    <div className="App">
      <h3>{input}</h3>
      <input type='text' onChange={onChange}></input>
      <button onClick={onClick}>확인</button>
      <p>이름의 길이 : {memoCountName}</p>
      <hr/>

    <StatusBar/>
    <SavButton/>


    </div>
  );
}

export default App;
