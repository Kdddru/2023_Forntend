import { useState } from 'react';
import './App.css';
import CheckboxWithLabel from './components/CheckboxWithLabel';
import CountButtons from './components/CountButtons';
import Countview from './components/Countview';

function App() {
  const [count, setCount] = useState(0);

  //증가
  const increment = () =>{
    setCount(count+1);
  }

  const decrement = () =>{
    setCount(count-1);
  }

  //감소


  return (
    <div className="App">
      <CheckboxWithLabel labelOn={'on'} labelOff={'off'}/>
      <Countview count={count}/>
      <CountButtons incrementFn={increment} decrementFn={decrement}/>
    </div>
  );
}

export default App;
