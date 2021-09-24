import React from 'react';
import { Card } from 'react-bootstrap';
import './SearchLocation.css';

export default class SearchLocation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
    };
  }

  showModalOnClick = () => {
    this.props.setSelectedLocation(this.props.location);
  }

  handleClose = () => {
    this.setState({ showModal: false });
  }

  render() {
    const location = this.props.location

    return (
      <>

        <Card className="card-location" onClick={this.showModalOnClick} style={{ width: '10rem' }}>
          <Card.Body>
            <Card.Title>{location.restaurant}</Card.Title>
            <Card.Text>{location.addressLines.join(', ')}</Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
}