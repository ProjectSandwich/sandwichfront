import React from "react";
import { Navbar } from "react-bootstrap";
//  import { Link } from "react-router-dom";
import './header.css';
import { Container } from "react-bootstrap";


class Header extends React.Component {
  render() {
    return (
      
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">PROJECT SANDWICH</Navbar.Brand>
     {/* <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#Map">SANDWICH FINDER</Nav.Link>
      <<Nav className="nav-Link">
     Nav.Link href="#About Us">About Us</Nav.Link> */}
    {/* </Nav> */}
    </Container>
    </Navbar>
    )
  }
}
export default Header;