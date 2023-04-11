import React from 'react'
import {Link} from 'react-router-dom'


//URL 파라미터 값 가져오는 함수
import { useParams } from 'react-router-dom'

export const Story = () => {

    //app.js path ='/story/:value'
    const params = useParams();
    const {value} = useParams(); 
    
    return (
        <div>
            <h1>{params.value}Story</h1>
            <p>{value}Story입니다</p>
            <p>
            <Link to={'/'}>Home</Link>
            </p>
            <Link to={'/about'}>about</Link>
        </div>
    )
}
