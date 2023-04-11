import React from 'react'
import { useParams } from 'react-router-dom'

export const Story2 = () => {
    const {name} = useParams();
    return (
        <div>
            {name}Story2입니다
        </div>
    )
}
