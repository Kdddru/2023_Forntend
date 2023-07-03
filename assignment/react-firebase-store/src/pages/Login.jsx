import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { userLogin } from '../slice/userSlice';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  
  const onGooleLogin = () =>{
    const auth = getAuth();
    signInWithPopup(auth, provider)
    //로그인 성공시
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      console.log(user);
      dispatch(userLogin({
        name : user.displayName,
        email : user.email,
        uid : user.uid,
        photo : user.photoURL
      }))

      //세션 스토리지에 값을 저장
      //그 값을 문자로 만들어서 저장
      const userData = {
        name : user.displayName,
        email : user.email,
        uid : user.uid,
        photo : user.photoURL
      }
      sessionStorage.setItem(`user`, JSON.stringify(userData));
      // 홈으로 이동
      navigate(`/`)
    })
    //로그인 실패시
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }
  return (
    <div>
      <h1>Login</h1>
      <button
      onClick={onGooleLogin}
      >구글로 로그인</button>
    </div>
  )
}
