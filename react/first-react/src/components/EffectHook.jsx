import React, { useEffect, useState } from 'react'

export const EffectHook = () => {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());
    

    //DidMount, DidUpdate 함께 사용
    useEffect(()=>{
        document.title = `you clicked ${count} times`;
    })
    //time Update
    //DidMount 일때만 사용
    //useEffect(()=>{},[]) 2번째 인자인 []값이 빈배열일때
    useEffect(()=>{
        setInterval(()=>{
            setDate(new Date());
            console.log(`실행`);
        }, 1000);
    },[]
    )
    //useEffect의 두번쨰 인자값에 state의 값이 들어갈때
    //특정 state값이 바뀌면, useEffect 실행
    //[]안에 여러개의 값을 넣을 수 있음
    useEffect(()=>{
        //setCount사용x 값이 원래대로 돌아가기 때문
        console.log(`count : `,count);
    },[count, date] //date값이 바뀔때마다 count도 같이 업데이트
    )
    
    //useEffect 이용하여 생성할때
    //alert을 사용하여 '컴포넌트 생성' 경고창 띄우기
    /**
    useEffect(()=>{
        alert('컴포넌트 생성!');
    })
     * 
     */

    //useEffect 이용하여 date값이 바뀔때
    //date의 초를 console.log를 통해 출력
    useEffect(()=>{
        console.log(date.getSeconds());
    },[date]);

    return (
        <div>
            <p>{count}번 클릭</p>
            <button onClick={()=>{
                setCount(count+1);
            }}>+1</button>
            <h3>{date.getMinutes()}:{date.getSeconds()}</h3>
        </div>
    )
}

