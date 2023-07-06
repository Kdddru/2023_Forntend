import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      로그인에 실패하면 Home으로 돌아옵니다
      <br/>
      <Link to={`/login`}>로그인</Link>
    </div>
  )
}
