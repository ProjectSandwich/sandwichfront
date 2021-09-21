//  import logo from './logo.svg';
import Header from './Header'
import React from 'react';
import './App.css';
import Login from './components/Login';
import LogoutButton from './components/LogoutButton'
import { withAuth0 } from '@auth0/auth0-react'
import { Switch, Route } from 'react-router-dom';
import MapPage from './components/mapPage';
import Profile from './components/Profile';

class App extends React.Component {
  render() {
    const { auth0 } = this.props;
    console.log('auth0 in App', auth0);

    return (
      <>
      <Header/>
        {auth0.isAuthenticated
          ? (
            <>
              Welcome back, {auth0.user.name}
              <LogoutButton />
            </>
          )
          : <Login />
        }
        <Switch>
          <Route exact path="/">
          </Route>
          <Route path="/map">
            <MapPage />
          </Route>
          <Route path="/aboutus">
          About Us Component
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </>
    );
  }
}

export default withAuth0(App);
