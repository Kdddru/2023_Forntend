import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export const TextControlsExample = () => {
  return (
    <div>
      <Form className='mx-3'>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>제목</Form.Label>
          <Form.Control type="text" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary">작성 완료</Button>
      </Form>
    </div>
  );
}
