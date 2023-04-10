import React, { useEffect, useState } from 'react'

export const EffectHook2 = () => {
    const[name, setName] = useState('홍길동');
    const[age, setAge] =  useState(29);
    const[profile, setProfile]= useState(
        {name:`홍길동`, age:29}
    )

    //setName 먼저실행 -> useEffect 함수 실행
    //빨라서 둘다 동시에 시작하는 것같음
    useEffect(()=>{
        setProfile({...profile,name});
    },[name]);

    //age값이 바뀌었을때 profile의 age값 수정
    //보통은 버튼을 눌렀을때 값이 들어감
    useEffect(()=>{ 
        setProfile({...profile,age}); 
    },[age]);
    
    return (
        <div>
            <p>
                useState의 값은 비동기로 저장(실행순서대로 저장되지 않음)
            </p>
            <label>이름</label>
            <input type='text'
                onChange={(e)=>{
                    const inputValue = e.target.value;
                    setName(inputValue);
                    //setProfile({...profile, name:name})과 동일
                    //name ='값'이 변수와 값이 객체의 속성과 값으로 들어감

                    //같은 이벤트에서 set을 이용하여 수정한 state값을 가져올려고하면
                    //이전 값을 가져온다.(현재 바로 수정한 값 접근X)
                }}
            />
            <br/>
            <label>나이</label>
            <input type='number'
                onChange={(e)=>{
                    const ageValue = parseInt(e.target.value);
                    setAge(ageValue);
                }}
            />
            <h4> name : {name}, profile.name: {profile.name} </h4>
            <h4> name : {age}, profile.name: {profile.age} </h4>
        </div>
    )
}
