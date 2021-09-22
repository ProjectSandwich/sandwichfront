import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';


class Header extends React.Component {
  render() {
    return (
  <>    
  {/* <Navbar bg="dark" variant="dark"> */}
  <Navbar style={{backgroundColor: "#58595b", position: "sticky"}} variant="dark" fixed="top">
    
    <Navbar.Brand href="/">PROJECT SANDWICH</Navbar.Brand>
    <Nav className="nav-Link">
     <Nav.Link href="./">Home</Nav.Link>
      <Nav.Link href="./mapPage">SANDWICH FINDER</Nav.Link>
      <Nav.Link href="./profile">Profile</Nav.Link>
      <Nav.Link href="./AboutUs">About Us</Nav.Link> 
     </Nav>
    
  </Navbar>
  </>
    )
  }
}
export default Header;

