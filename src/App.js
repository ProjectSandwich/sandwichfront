<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> cf761e027e77ca58c0de2539f621f16147696229
import './App.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton'
import { withAuth0 } from '@auth0/auth0-react'

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
      </div>
    );
  }
}

export default withAuth0(App);
