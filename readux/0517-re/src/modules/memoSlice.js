import { createSlice } from "@reduxjs/toolkit";

const memoSlice = createSlice({
  name : 'memo',
  initialState : [
    {
      id : 1,
      text : "메모입니다",
      date : '2023-05-17',
      isLike : false
    },
    {
      id : 2,
      text :'두번째 메모입니다',
      date: '2023-05-17',
      isLike : true
    }
  ],
  reducers: {
    addMemo : (state,action)=>{
      //값을 컴포넌트에서 들고올때는 action을 통해서 들고오기
      const newMemo = {
        text : action.payload,
        id : id,
        date : '2023-05-17',
        isLike : false
      }
      //리덕스 툴킷은 값에 직접 접근해서 수정해도 업데이트한다
      /**
       *  push()는 원본 배열에 바로 추가
       *  concat()은 원본은 그대로 있고 return값에 추가
       */
      id++;
      state.push(newMemo);
    },
    deleteMemo : (state, action)=>{
      //action.payload에 인덱스값 들고오기
      state.splice(action.payload,1);
    },
    likeMemoRedux : (state,action)=>{
      const newMemo = state.map((s)=>(s.id === action.payload ? {...s, isLike : !s.isLike} : s))
      return newMemo;
    },
    likeMemoToolkit : (state, action) =>{
      //action.payload = {i,m}
      const modifyMemo = {
        ...action.payload.m,
        isLike: !action.payload.m.isLike
      }
      state.splice(action.payload.i , 1 , modifyMemo);
    }
  }
})

let id = 3;

export const { addMemo , deleteMemo, likeMemoRedux, likeMemoToolkit } = memoSlice.actions 
export default memoSlice.reducer