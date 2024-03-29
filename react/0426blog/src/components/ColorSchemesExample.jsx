import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const ColorSchemesExample = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/boardlist">boardlist</Nav.Link>
            <Nav.Link href="/loginform">loginform</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
