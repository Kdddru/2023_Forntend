import React from 'react'
import { BoardCard } from '../components/BoardCard'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const Boardlist = ({boardlist}) => {
  const navi = useNavigate();


  return (
    <div>
      <Button onClick={()=>{navi(`/boardform`)}}>게시글 작성</Button>
      {
        boardlist.map((board,i)=>(
          <div key={i}>
            <BoardCard board={board}/>
          </div>    
        ))  /** return()와 같은 뜻 */
      }
    </div>
  )
}
