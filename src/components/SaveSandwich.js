import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class SaveSandwich extends React.Component {

  render() {
    return (
      <>
        <Modal show={true} onHide={this.clearSelectedLocation}>
          <Modal.Header closeButton>
            <Modal.Title>Add Your Favorite Sandwich from {this.props.restaurant}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <input placeholder="Sandwhich Name" name="sandwich" />
              <input placeholder="Why did you love that sandwich?!" name="description" />
              <Button variant="secondary" type="submit">Save Sandwich</Button>
            </form>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}