import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { userLogin, userLogout } from '../slice/userSlice';

export const Home = () => {
  //store에 있는 user
  const user = useSelector((state)=>(state.user));
  console.log(user);
  const dispatch = useDispatch();
  
  
  //로그인 상태 유지
  //깜빡이는건 서버간에 데이터 받는데 딜레이 발생하기때문에 
  const auth = getAuth();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
    if (user) {
       // User is signed in, see docs for a list of available properties
       // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
       // ...
      dispatch(userLogin({
        name : user.displayName,
        email : user.email,
        uid : user.uid,
        photo : user.photoURL
      }))
    } else {
       // User is signed out
       // ...
    }
  });
  },[])
  
  const logout = () =>{
      signOut(auth).then(() => {
        // Sign-out successful.
        dispatch(userLogout());
      }).catch((error) => {
        // An error happened.
      });
  }

  return (
    <div>
      <h1>Home</h1>
      <Link to={`/login`}>로그인</Link>
      {user.user && <button onClick={logout}>로그아웃</button>}
      <p>{user.user && user.user.name}</p>
      <img src={user.user && user.user.photo} alt="" />
      <br/>
    </div>
  )
}
