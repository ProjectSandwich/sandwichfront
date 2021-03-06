import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

const LoginButton = () => {
  const auth0 = useAuth0();
  console.log(auth0);


  const { loginWithRedirect } = useAuth0();

  return <Button variant="dark" onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default LoginButton;