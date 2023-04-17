import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import data from '../data/dummy.json'
import DataContext from '../context/DataContext';

export const Board = () => {
  const navigate =useNavigate();
  const{id} = useParams();

  const {state} = useContext(DataContext);
  const {boardlist} = state;

  const boardData = boardlist.find((d)=>(d.id == id));

  

  useEffect(()=>{
    if (boardData == undefined) {
        navigate('/boardlist');
    }
  },[])

  return (
    <div>
      {   // 화면이 먼저 화면에 렌더되고, useEffect 실행
            // 화면 상에서 나타나는 오류를 제거하고
            // useEffect로 이동
            // boardData = undefined == false
            // boardData = 값있음 == true
            // >> 자동 형변환
            boardData && (
                <div>
                    <h3>제목: {boardData.title}</h3>
                    <p>작성자: {boardData.writer}</p>
                    <p>내용 : {boardData.content}</p>
                    <p>날짜: {boardData.date}</p>
                </div>
            )
        }
    </div>
  )
}
