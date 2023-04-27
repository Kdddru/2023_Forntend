import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export const BoardCard = ({board}) => {
  return (
    <Link to={`/boardlist/${board.id}`} style={{textDecoration: 'none'}}>
      <Card style={{ width: '18rem' }} className='m-auto'>
        <Card.Body>
          <Card.Title>{board.title}</Card.Title>
          <Card.Text>{board.date}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}
