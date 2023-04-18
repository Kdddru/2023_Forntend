import React, { useContext} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DataContext from '../context/DataContext';

export const Board = () => {
  const navigate =useNavigate();
  const{id} = useParams();

  const {state,action} = useContext(DataContext);
  const {boardlist} = state;

  const boardData = boardlist.find((d)=>(d.id === Number(id)));

  



  const deleteBoard = () =>{
    const newBoardlist = boardlist.filter((board)=>(
      (board.id !== Number(id))  
      //자료형 일치라서 필터안은 넘버 state에서 들고온 id는 string값
    ))

    action.setBoardlist(newBoardlist);
    navigate(`/boardlist`)
  }

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
        {
          boardData && 
          state.user.writer === boardData.writer &&
          <div>
            <button
            onClick={()=>{deleteBoard()}}
            >
              이 게시글 삭제
            </button>
            <button
            //navigate의 state를 이용하여 boardData객체를 전달
            onClick={()=>{
              navigate('/board-modify-form',{state:boardData})
            }}
            >
              수정하기
            </button>
          </div>
        }
    </div>
  )
}
