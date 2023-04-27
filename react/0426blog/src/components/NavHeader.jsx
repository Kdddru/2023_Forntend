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

//prop값을 구조분할로 객체의 값을 바로 가져올 수 있다
export const NavHeader = ({user}) => {



  return (
    <div>
      <Navbar bg='primary' variant='dark'>
        <Container>
          <Navbar.Brand className='nav-link'>블로그</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={`/`} className='nav-link'>홈</Link>
            <Link to={`/boardlist`} className='nav-link'>게시판</Link>
            {/**유저의 값이 있다면 user.name을 출력 */}
            {
              user ? <Navbar.Text>{user.name}</Navbar.Text>  : 
              <Link to={`/loginform`} className='nav-link'>로그인</Link>
            }
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
