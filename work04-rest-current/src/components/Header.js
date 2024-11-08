import React from 'react';
// import {Container, Navbar, Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          {/* .을 -로 바꾸고 전부 소문자로 변경... className */}
          {/* <Navbar.Brand>Navbar</Navbar.Brand> */}
          <Link to="/" className='navbar-brand'>Home</Link>
          <Nav className="me-auto">
            <Link className='nav-link' to="/saveForm">글쓰기</Link>
            <Link className='nav-link' to="/joinForm">회원가입</Link>
            <Link className='nav-link' to="/loginForm">로그인</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;