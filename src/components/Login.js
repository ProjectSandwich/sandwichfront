import React from 'react';
import LoginButton from './LoginButton';
import { Card } from 'react-bootstrap';

class Login extends React.Component {
  render() {
    return (
      <Card className="text-center" style={{ width: '18rem' }}>
        <Card.Body>
          <h1>Project Sandwich</h1>
          <LoginButton />
        </Card.Body>
      </Card>
    )
  }
}

export default Login;