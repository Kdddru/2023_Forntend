import React, { useState } from 'react'
    //About에 form을 이용하여 쿼리스트링을 전달
    //컴포넌트가 아닌 자바스크립트의 함수로 이동하기위한 내용
import { useNavigate } from 'react-router-dom';


export const FormComp = () => {
    
    const navigate = useNavigate();
    const [input, setInput] = useState(``);
    
    return (
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault();
                //라우터를 이용하여 이동
                //link 컴포넌트 사용불가
                //navigate를 통해서, 주소이동 가능
                navigate(`/about?name=${input}`);
            }}>
                <label>이름</label>
                <input type='text' name='name' onChange={
                    (e)=>{setInput(e.target.value)}
                }/>
                <input type='submit' value={'제출'}/>
            </form>
        </div>
    )
}
