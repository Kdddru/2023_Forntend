import React from 'react'
import { BoardCard } from '../components/BoardCard'
import { useNavigate } from 'react-router-dom'

export const Boardlist = ({boardlist}) => {
  const navi = useNavigate();



  return (
    <div>
      <button onClick={()=>{navi(`/boardform`)}}>게시글 작성</button>
      {
        boardlist.map((board,i)=>(
          <div key={i}>
            <BoardCard board={board}/>
          </div>
            
        ))
      }
    </div>
  )
}
