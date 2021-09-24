import React from 'react';
import { Modal } from 'react-bootstrap';

export default class SandwichMarker extends React.Component {
  constructor() {
    super()

    this.state = {
      show: false,
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const { sandwich } = this.props
    return (
      <><div onClick={this.showModal} style={{ fontSize: '50px', marginLeft: '-25px', marginTop: '-31px' }}>🥪</div>
        <div>
          <Modal
            size="sm"
            show={this.state.show}
            onHide={this.hideModal}
          >
          <Modal.Header closeButton><h2>{sandwich.sandwich}</h2></Modal.Header>
          <Modal.Body>
          {sandwich.restaurant && <li> {sandwich.restaurant} </li>}
          {sandwich.address && <li> {sandwich.address} </li>}
          {sandwich.yelpUrl && <li> <a href={sandwich.yelpUrl}>View On Yelp</a></li>}
          </Modal.Body>
          </Modal>
        </div>
      </>
    );
  }
}
