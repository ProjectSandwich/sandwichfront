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
              <h2>Have you have ever had a sandwich that was so good, you could say it was a transcendental experience? 
You just can’t stop thinking about it and want to share it with others, and maybe even find more sandwiches in hopes of replicating that experience.
PROJECT SANDWICH is a site for avid sandwich aficionados to come together and rave about all the cathartic Cheesesteaks, transformative Tunamelts and profound PB&Js of the world. Join us in Club Sandwich and find your next best sandwich experience today!
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