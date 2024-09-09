import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavbarCollapse } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from 'react-router-dom';


export const Header = () => {
  const history = useHistory()

	const logMeOut = () => {
    history.push("/");
  };
  return (
    <Navbar collapseOnSelect bg="primary" variant="dark" expand="md">
    <Navbar.Brand>
    <img src='./images/Vertical Lockup on White Background.png' width="50px" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <LinkContainer to="/dashboard">
          <Nav.Link>Dashboard</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/tickets">
          <Nav.Link>Tickets</Nav.Link>
        </LinkContainer>

        <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar> 

  );
};