import React from 'react';
import LoginButton from './LoginButton';
import { Card, Image } from 'react-bootstrap';
import logo from '../images/sandwich.png'

class Login extends React.Component {
  render() {
    return (
      <Card className="text-center" style={{ width: '18rem' }}>
        <Card.Body>
          <h1>Project Sandwich</h1>
          <Image src={logo} fluid />
          <LoginButton />
        </Card.Body>
      </Card>
    )
  }
}

export default Login;