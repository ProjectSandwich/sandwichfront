import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';
import { Container } from "react-bootstrap";


class Header extends React.Component {
  render() {
    return (
  <>    
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">PROJECT SANDWICH</Navbar.Brand>
    <Nav className="nav-Link">
     <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#Map">SANDWICH FINDER</Nav.Link>
      <Nav.Link href="#Profile">Profile</Nav.Link>
      <Nav.Link href="#About Us">About Us</Nav.Link> 
    </Nav>
    </Container>
  </Navbar>
  </>
    )
  }
}
export default Header;

