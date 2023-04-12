import React from 'react'
import {useParams} from 'react-router-dom'


export const Story2 = () => {
    const {name} = useParams();
    return (
        <div>
            Story2입니다
            <h1>Story2List</h1>
        </div>
    )
}
