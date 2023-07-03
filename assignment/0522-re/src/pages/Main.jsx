import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../styledComponents/Button';
import { logout } from '../slice/userSlice';

export const Main = () => {
  const user = useSelector((state)=>(state.user));
  const dispatch = useDispatch();
  console.log(user);
  return (
    <div>
      <h1>Main</h1>
      <p>로그인이 성공하였습니다</p>
      <p>{user && user.email}</p>
      {user && <Button onClick ={()=>{dispatch(logout())}}>로그아웃</Button>}
    </div>
  )
}
