import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '../styledComponents/Button';
import { useDispatch } from 'react-redux';
import { loginUser } from '../slice/userSlice';

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);


  const createUser = (e) =>{
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    navigate(`/main`);
    // ...
    })
    .catch((error) => {
      
      // ..
      navigate(`/`);
    });
  }

  const onLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      dispatch(loginUser({
      name : user.displayName,
      email : user.email,
      photo : user.photoURL,
      uid : user.uid,
    }));
    console.log(user);
      // ...
      navigate(`/main`);
    })
    .catch((error) => {
      navigate(`/`);
    });
  }

  return (
    <div>
      <h1>LoginForm</h1>
        <form onSubmit={createUser}>
          <span>이메일</span>
          <input type="email" required
            value={email} 
            onChange={(e)=>{setEmail(e.target.value)}}
          /> <br/>
          <span>비밀번호</span>
          <input type='password' required
          value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
          /> <br/>
          <Button color="green" type='submit' value={`회원가입`}>회원가입</Button>
          <Button type='button' value={`로그인`}
            onClick={onLogin}>로그인</Button>
        </form>
    </div>
  )
}
