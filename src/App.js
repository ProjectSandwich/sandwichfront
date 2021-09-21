import React from 'react';
import './App.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton'
import { withAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom';
import {NavItem } from 'react-bootstrap';

class App extends React.Component {
  render() {
    const { auth0 } = this.props;
    console.log('auth0 in App', auth0);

    return (
      <div className="App">
        {auth0.isAuthenticated
          ? (
            <>
              Welcome back, {auth0.user.name}
              <LogoutButton />
            </>
          )
          : <LoginButton />
        }
        <NavItem><Link to="/mapPage" className="nav-link">Map Page</Link></NavItem>
      </div>
    );
  }
}

export default withAuth0(App);
