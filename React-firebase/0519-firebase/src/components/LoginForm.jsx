import React, { useState } from 'react'
import { auth } from '../database/fireBase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


export default function LoginForm() {
  //form 안에 있는 값을 가져오는 state
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  const [user, setUser] = useState(null);
  


  //회원가입 버튼 이벤트
  const onEmail = (e) =>{
    e.preventDefault()
    //인증하는것
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
      setUser({
        uid : user.uid,
        email : user.email,
        displayName : user.displayName 
      })
    })
      //Signed fail
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage);
      // ..
    });
  }

  //로그인
  const onLogin =() =>{
    async function getLogin(){
      try{
        const userCredential = signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(user);
        console.log('로그인');
      }
      catch(error){
        console.log(error.code, error.message);
      }
    }

    return getLogin();
  }

  return (
    <div>
      <h2>로그인 폼입니다</h2>
      <form onSubmit={onEmail}>
        <label htmlFor="">email</label>
        <input type="email" required
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
        />
        <br/>
        <label htmlFor="">password</label>
        <input type="password" required
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
        />
        <br/>
        <input type="submit" value="회원가입" />
      </form>
        <button type='button'
        onClick={onLogin}
        >로그인</button>
      <h3>{user ? user.email:'로그인x'}</h3>
    </div>
  )
}
