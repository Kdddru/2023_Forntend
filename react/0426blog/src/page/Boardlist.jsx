import React from 'react'
import { BoardCard } from '../components/BoardCard'

export const Boardlist = ({boardlist}) => {
  return (
    <div>
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
