import {React,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseNumber, decreaseNumber, changeNumer } from '../modules/counterNumber';

export const CounterNumber = () => {
  const dispatch = useDispatch();
  const counterNumber = useSelector((state)=>(state.counterNumber));

  const [inputValue, setInputValue] = useState();

  console.log(counterNumber);
  return (
    <div>
      <h1>CounterNumber</h1>
      <div>{counterNumber.count}</div>
      <div>{counterNumber.num}</div>
      <button
      onClick={
        ()=>{dispatch(increaseNumber())}
      }
      >
        +{counterNumber.num}
      </button>
      <button
        onClick={
          ()=>{dispatch(decreaseNumber())}
        }
      >
        -{counterNumber.num}
      </button>
      <br/>
      <input type='number'
        value={inputValue}
        onChange = {(e)=>{setInputValue(e.target.value)}}
      />
      <button
      onClick={()=>{
        dispatch(changeNumer(parseInt(inputValue)))
        setInputValue('')
      }}
      >숫자입력</button>
    </div>
  )
}
