import React from 'react'
import { Link } from 'react-router-dom'

//bootstrap 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

/**
 * m 전체
 * my 위아래 마진
 * mx 좌우 마진
 * mt/mb 위/아래
 * me,ms 오른쪽/왼쪽
 * 1~5 숫자 클수록 넓어짐
 * p 패딩
 *  
 */


export const NavHeader = () => {
  return (
    <div>
      <Navbar bg='primary' variant='dark'>
        <Container>
          <Navbar.Brand className='nav-link'>블로그</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={`/`} className='nav-link'>홈</Link>
            <Link to={`/boardlist`} className='nav-link'>게시판</Link>
            <Link to={`/loginform`} className='nav-link'>로그인</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
