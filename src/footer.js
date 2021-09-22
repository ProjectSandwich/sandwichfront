import React from 'react';
import Navbar from 'react-bootstrap/Navbar';


class Footer extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" id="navBarFooter">
        <Navbar.Brand id="navBarFooterTitle">PROJECT SANDWICH</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;
