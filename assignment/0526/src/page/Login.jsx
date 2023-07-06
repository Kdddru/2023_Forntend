import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const Login = () => {
  const [email, setEmail] =useState();
  const [password, setPassword] =useState();

  const onLogin = () =>{
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert(`로그인 성공`);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }


  return (
    <div
    style={{textAlign:'center'}}
    >
    <h1>로그인</h1>
    <label htmlFor="">email</label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
    <br/>
    <label htmlFor="">password</label>
    <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
    <button
    onClick={onLogin}
    >로그인</button>
    </div>
  )
}
