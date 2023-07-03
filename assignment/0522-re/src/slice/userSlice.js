import { createSlice } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";
import { auth } from "../dataBase/fireBase";


export const userSlice = createSlice({
  name : 'user',
  // {name, email, photo, uid}
  initialState : null,
  reducers : {
    loginUser : (state,action)=>{
      console.log(action.payload);
      // action.payload로 전달할때 {name, email, photo, uid}
      // 파이어베이스에서 로그인값들고올땐 action.payload를 return 하자
      return action.payload;
    },
    logoutUser : ()=>{
      return null;
    }
  },
})

//로그아웃을 사용하기 위한 리덕스 미들웨어
export const logout =() => (dispatch) => {
  signOut(auth).then(()=>{
    dispatch(logoutUser())
  }).catch(()=>{})
}

export const { loginUser, logoutUser } = userSlice.actions

export default userSlice.reducer