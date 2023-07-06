import React, { useState } from "react";

interface CounterProps{
  startNumber : number;
  Idarray : any;
}

const CounterComp: React.FC<CounterProps> = (props) =>{
  const {startNumber,Idarray} = props

  const [count, setCount] = useState(startNumber);
  const [id] = useState(Idarray);


  console.log(id);

  const InputNumChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setCount(parseInt(e.target.value));
  }

  return(
    <div>
      <h1>Counter 컴포넌트</h1>
      <p>props 값으로 전달된 처음 값: {props.startNumber}</p>
      <p>props값을 받아와 값을 수정하는 state 값 : {count}</p>
      <p>
        수정할 숫자
        <input type="number"
        onChange={InputNumChange}
        />
      </p>
      <hr/>
      <ul>
        <li>id : text</li>
        {id && id.map((d : any, i : number)=>(
          <li key={d.id}>{d.id} : {d.text}</li>  
        ))}
      </ul>
    </div>
  )
}

export default CounterComp;