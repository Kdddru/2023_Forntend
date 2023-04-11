import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation, useSearchParams } from 'react-router-dom';

export const About = () => {

    const location = useLocation();

    /**
     * 쿼리 스트링의 값을 구분해서 사용하기 위함
     */
    const [searchParams, setSearchParams] = useSearchParams();
    /**
     * get을 통해서 ?이름=값&이름=값중 
     * 이름을 적어서 값을 가져올수있다.
     */
    const nameText = searchParams.get('name');


    return (
        <div>
            <h1>About</h1>
            <p>About페이지 입니다</p>
            <p>{location.search} : 쿼리스트링으로 가져온 값</p>
            <p>{nameText}:쿼리스트링으로 가져온 값</p>
            <p>
            <Link to={'/'}>Home</Link>
            </p>
            <Link to={'/story'}>Story</Link>
        </div>
    )
}
