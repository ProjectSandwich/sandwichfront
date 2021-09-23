import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './Home.css'

// import logo from '../assets/sandwich.png'
import './Login.css'
import Login from './Login';
import LogoutButton from './LogoutButton'
import { withAuth0 } from '@auth0/auth0-react'


export class Home extends React.Component {
  render() {
    const { auth0 } = this.props;

    return (
      <div className='home-background'>
        <Container>
          <Card className="welcome-card">
            <Card.Body>
              <h1>Welcome to Project Sandwich!</h1>
              <h2>Have you have ever eaten a sandwich that was so amazing it was a transcendental experience that you have obsessed over and want to replicate? PROJECT SANDWICH is a site  where you can share your experience and also search other Best Sandwich Experiences other avid sandwich aficionados have posted. Join CLUB SANDWICH! to find and/or share a Best Sandwich Experience.
              </h2>
            </Card.Body>
          </Card>
          {auth0.isAuthenticated
            ? (
              <>
                Welcome back, {auth0.user.name}
                <LogoutButton />
              </>
            )
            : <Login />
          }
        </Container>
      </div>
    )
  }
}
export default withAuth0(Home);