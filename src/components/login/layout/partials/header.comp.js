import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavbarCollapse } from 'react-bootstrap';


export const Header = () => {
  return (
    <Navbar collapseOnSelect  bg="primary" data-bs-theme="dark" expand="md">
        <Container>
          <Navbar.Brand> 
            <img src='./images/Vertical Lockup on White Background.png' width="50px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'/>
          <Nav className="me-auto">
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#dashboard">Tickets</Nav.Link>
            <Nav.Link href="#dashboard">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>     
      
  );
};

// export default Header
