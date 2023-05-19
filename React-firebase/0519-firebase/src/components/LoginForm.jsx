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
      // 회원가입 성공
      const user = userCredential.user;
      console.log(user);
      // ...
      setUser({
        uid : user.uid,
        email : user.email,
        displayName : user.displayName 
      })
    })
      //회원가입 fail
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage);
      // ..
      if(errorCode === 'auth/email-already-in-use'){
        alert('동일한 이메일이 있습니다');
      }
      else if(errorCode==='auth/weak-password'){
        alert(`비밀번호를 6자리 이상 적어주세요!`);
      }
    });
  }

  //로그인
  const onLogin =() =>{
    async function getLogin(){
      //로그인 성공
      try{
        const userCredential = signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(user);
        console.log('로그인');
      }
      //로그인 실패
      catch(error){
        console.log(error.code, error.message);
        if(error.code ==='auth/user-not-found ' || 'auth/wrong-password'){
          alert(`없는 이메일이거나 비밀번호가 잘못되었습니다`);
        }
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
