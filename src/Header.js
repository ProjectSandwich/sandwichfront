import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './header.css';
import { Link } from 'react-router-dom';


class Header extends React.Component {
  render() {
    return (
  <>    
  {/* <Navbar bg="dark" variant="dark"> */}
  
  <Navbar style={{backgroundColor: "#58595b", position: "sticky"}} variant="dark" fixed="top">
    
  <Navbar.Brand href="/">PROJECT SANDWICH</Navbar.Brand>
    <Nav>
     <Nav.Link as={Link} to="/">HOME</Nav.Link>
     <Nav.Link as={Link} to="/map">SANDWICH FINDER</Nav.Link>
     <Nav.Link as={Link} to="/profile">PROFILE</Nav.Link>
     <Nav.Link as={Link} to="/AboutUs">ABOUT US</Nav.Link>
    </Nav>
  </Navbar>
  </>
    )
  }
}
export default Header;


