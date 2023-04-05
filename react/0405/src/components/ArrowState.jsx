import { useState } from "react"
import './css/arrowstate.css'

const ArrowState = (props) =>{
    const [message, setMessage] = useState(
        {
            time : '10:53',
            text : '메세지 입니다'
        }
        );   //state   setMessage는 message값 바꿔주는것
        
        const [number, setNumber] = useState(0);
        const [array, setArray] = useState([1,2,3,4,5]);
        const [students, setStudent] = useState(
            [
                {id:1, name:'홍길동', checked :true},
                {id:2, name:'성춘향', checked :false},
                {id:3, name:'뚤기', checked :false},
            ]
            );
    let studentId = students.length+1;
            
    const [inputName, setInputName] = useState('');
    //함수안에 있는 내용이 계속초기화 되기 때문에
    
    //input값 inputName  state에 따로 저장
    const setInput = (e) =>{
        setInputName(e.target.value);
    }
    const addStudent = ()=>{
        const newStudents = students.concat({
            id:studentId,
            name :inputName
        });
        setStudent(newStudents);
        setInputName('');
    }

    const deleteStudent = (id)=>{
        const newStudents = students.filter((s)=> s.id!==id);
        setStudent(newStudents);
        }
    
    const checkStudent = (stud) =>{
        const newStudents = students.map((s)=>{
            if(s.id !== stud.id){
                return s;
            }
            else{
                return {...s, checked: !s.checked}
            }
        })
        setStudent(newStudents);
    }


    return(
        <div>
            <p>{message.text}</p>
            {/**배열의 일부분을 바꾸기(... 스프레드 연산자 사용) */}
            <button onClick={()=>{
                setMessage({...message, text:'바꼇네?'})
                console.log(message);
            }}>버튼</button>
            <p>{number}</p>
            <ul>
                {array.map((num,index)=>(<li key={index}>{num}</li>))}
            </ul>
            <h3>학생추가</h3>
            <input type="text" 
            onChange={setInput}
            value={inputName}
            ></input>
            <button
            onClick={addStudent}
            >추가</button>
            <ul>
                {students.map((stud, index)=>(
                <li className={stud.checked && 'on'} 
                key={index}>
                <input type="checkbox" checked={stud.checked}
                onClick={()=>{checkStudent(stud)}}
                >
                </input>
                    {stud.id}{stud.name}
                    <button onClick={()=>{deleteStudent(stud.id)}}>
                    버튼
                    </button>
                </li>))}
            </ul>
        </div>
    )
}

export default ArrowState