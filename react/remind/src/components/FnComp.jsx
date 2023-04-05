import { useState } from "react";

const FunctionComp = (props) =>{
    const[fandoms, setFandom] = useState([
        {id:1, name:`뚤기`},
        {id:2, name:`똥강아지`},
        {id:3, name:`박쥐`},
        {id:4, name:`주폭`},
        {id:5, name:`세균`},
        {id:6, name:`라니`}
    ]);
let fandomNum = fandoms.length+1;
const addFandom = () =>{
    const newList = fandoms.concat({
        id:fandomNum, 
        name:'팬치'
    })
    setFandom(newList);
    console.log(fandoms);
}

const deleteFandom = (x) =>{
    const newFandom = fandoms.filter((s)=>(
        s.id !== x.id
    ))
    setFandom(newFandom);
}
console.log(fandomNum);

    return(
        <div>
            <ul>
                <h1>팬덤명</h1>
                <input type="text"></input>
                <button onClick={addFandom}>추가</button>
                {fandoms.map((x,i)=>
                <li key={i}><span>{x.name}{x.id}</span>
                <button onClick={()=>{
                    deleteFandom(x)
                }}>삭제</button>
                </li>
                )}
            </ul>
        </div>
    )
}

export default FunctionComp;