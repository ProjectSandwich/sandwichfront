import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Image from 'react-bootstrap/Image'
import './Profile.css';
import { Card, Container } from 'react-bootstrap';


const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <Container>
        <Card className="profile-card" style={{ width: '18rem' }}>
        <Card.Body>
        <h1>Your Profile</h1>
        <Image src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        </Card.Body >
        </Card>
        </Container>
      </div>
    )
  );
};

export default Profile;