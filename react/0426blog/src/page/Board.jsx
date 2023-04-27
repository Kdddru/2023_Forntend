import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Board = ({boardlist}) => {
  const navigate= useNavigate();
  const params = useParams();

  //params 값으로 전달할 수 있는 내용은 숫자형과 문자형
  // 값으로 받아오면 문자형으로 들어온다

  const board = boardlist.find((b)=>(b.id === parseInt(params.id)));



  /**
   * react 컴포넌트의 실행 순서
   * 컴포넌트 안에있는 자바스크립트 순서대로
   * return 출력
   * useEffect()마운트 할때 자바스크립트 실행
   */
  //마운트 할때 실행하기 위해 빈 배열로 작성
  useEffect(()=>{
    if(board === undefined){
      navigate(`/`)
    }
  },[]);

  return (
    <div>
      {board && 
        (<div>
          <h1>{board.title}</h1>
          <p>{board.id}</p>
          <div style={{display:'flex', justifyContent:'space-evenly',marginTop:'10px',marginBottom:'10px'}}>
            <span>
              작성자: {board.name}
            </span>
          </div>
          <p>{board.content}</p>
          <p>{board.date}</p>
        </div>
        )
      }
    </div>
  )
}


