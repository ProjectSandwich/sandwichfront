import React from 'react';
import { Card, Modal } from 'react-bootstrap';

export default class SearchLocation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
    };
  }

  showModalOnClick = () => {
    this.setState({ showModal: true });
  }

  handleClose = () => {
    this.setState({ showModal: false });
  }

  render() {
    const location = this.props.location

    return (
      <>

        <Card onClick={this.showModalOnClick} style={{ width: '10rem' }}>
          <Card.Body>
            <Card.Title>{location.restaurant}</Card.Title>
            <Card.Text><a href={location.yelpUrl}>Link</a></Card.Text>
          </Card.Body>
        </Card>

        <Modal show={this.state.showModal} onHide={this.handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Add your best sandwich experience to the map!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Hello
          </Modal.Body>
        </Modal>
      </>
    )
  }
}