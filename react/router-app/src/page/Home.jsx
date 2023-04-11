import React from 'react'

import { Link } from 'react-router-dom'

//쿼리 스트링을 사용해서 이주소로 접근했을때
// 퀴리스트링값 가져오기

import { useLocation } from 'react-router-dom';
import { FormComp } from '../components/FormComp';


export const Home = () => {
    const fruit ='banana';
    const fruits = ['apple','orange','peach'];

    const location = useLocation();
    console.log(location);

    return (
        <div>
            <h1>Home</h1>
            <p>현재 화면은 홈입니다</p>
            <p><Link to={'/about'}>About</Link></p>
            {/** to의 속성값으로 문자열이 들어왔을때만 */}
            <p><Link to={`/story/${fruit}`}>Story</Link></p>
            <Link to ={'/story2'}>Story2</Link>
            <hr/>

            <FormComp/>
            <hr/>
            {/** map을 이용해서 배열의 값을 Link의 to 주소값으로 사용 */
                fruits.map((f,i)=>(
                    <p key={i}><Link to={`/story/${f}`}>{f}Story</Link></p>
                ))
            }
            <hr/>

            {
                fruits.map((f,i)=>(
                <p key={i}><Link to={`/story2/${f}`}>{f}story2</Link></p>
                ))
            }
        </div>
    )
}
