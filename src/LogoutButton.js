import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

class LogoutButton extends React.Component {
  render() {
    
    const { logout } = this.props.auth0;
    
    return ( 

      <Button onClick={() => logout({ returnTo: window.location.origin})}>
        Log Out
      </Button>
    );
  }
}

export default withAuth0(LogoutButton);