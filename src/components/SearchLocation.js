import React from 'react';
import { Card } from 'react-bootstrap';

export default class SearchLocation extends React.Component {
  render() {
    const location = this.props.location

    return (
      <>
        <Card style={{ width: '10rem' }}>
          <Card.Body>
            <Card.Title>{location.restaurant}</Card.Title>
            <Card.Text><a href={location.yelpUrl}>Link</a></Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
}