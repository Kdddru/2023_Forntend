import React from 'react'
import Card from 'react-bootstrap/Card';

export const BasicExample = () => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>제목</Card.Title>
        <Card.Text>
          날짜
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}
