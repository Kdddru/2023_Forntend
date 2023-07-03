import { createUserWithEmailAndPassword, getAuth ,signInWithEmailAndPassword} from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

//css
import style from './loginform.module.scss'


export const LoignForm = () => {
  //네비게이트 변수 지정
  const navigate = useNavigate();

  //정보들  
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  //회원가입
  const newEmail = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    //회원가입 성공시
    .then((userCredential) => {
    //
      const user = userCredential.user;
      console.log(user);
      setEmail(``);
      setPassword(``);
      alert(`회원가입을 축하합니다`);
      // ...
  })
  //회원 가입 실패시
    .catch((error) => {
      alert(`회원가입 실패`);
  });
  }

  // 로그인 이벤트
  const signIn = () =>{
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    //로그인 성공시
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    navigate(`/main`)
  })

  // 로그인 실패시
  .catch((error) => {
    navigate(`/`);
  });
  }


  return (
    <div> 
      {/** 입력 form 칸 */}
      <form onSubmit={newEmail}>
        <span>이메일</span>
        <input type="email"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
        />
        <br/>
        <span>비밀번호</span>
        <input type="password"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
        />
        <br/>
        {/** 버튼 div */}
        <div className={style.buttonBox}> 
          <input type="submit" value={'회원가입'}
          className={style.joinBtn}
          />
          <input type="button" value={'로그인'}
            onClick={signIn}
            className={style.loginBtn}
          />
        </div>
      </form>
    </div>
  )
}
