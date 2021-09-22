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
import AboutUs from './components/AboutUs';

import { Container } from 'react-bootstrap';
import backgroundimage from './images/backgroundimage.jpg';

console.log('backgroundimage',backgroundimage)

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

        <Container>
        <div  className="container"><img src={backgroundimage} alt="" /></div>   
        <div  className="container"></div>
        </Container>
        <Switch>
          <Route exact path="/">
          </Route>
          <Route path="/map">
            <MapPage />
          </Route>
          <Route path="/aboutus">
           <AboutUs />
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
