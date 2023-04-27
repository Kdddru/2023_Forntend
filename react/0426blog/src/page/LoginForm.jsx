import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


export const LoginForm = ({setUser}) => {
  const navi = useNavigate();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const loginUser = (e) =>{
    e.preventDefault();
    setUser({name:name});

    navi('/');
  }

  return (
    <Form className='mx-5 mt-3' onSubmit={loginUser}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>아이디</Form.Label>
        <Form.Control type="text" placeholder="아이디를 입력해 주세요" 
          onChange={(e)=>{setName(e.target.value)}}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>비밀번호</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}
