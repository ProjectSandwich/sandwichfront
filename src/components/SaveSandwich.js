import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class SaveSandwich extends React.Component {

  render() {

    const { location } = this.props

    return (
      <>
        <Modal show={true} onHide={this.props.onClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Your Favorite Sandwich from {location.restaurant}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <input placeholder="Sandwhich Name" name="sandwich" />
              <input placeholder="What is so good about it?!" name="description" />
              <Button variant="secondary" type="submit">Save Sandwich</Button>
            </form>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}