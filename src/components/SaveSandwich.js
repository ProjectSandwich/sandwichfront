import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class SaveSandwich extends React.Component {

  handleSave = event => {
    event.preventDefault();

    let elements = event.target.elements;
    let formData = {
      sandwich: elements.sandwich.value,
      description: elements.description.value,
      location: this.props.location,
    }
    console.log(formData);
    
    // onSave(formData);
    this.handleClose()
    
  }


  handleClose = () => {
    this.setState({ showModal: false });
  }

  render() {

    const { location } = this.props
    if (!location) {
      return null
    }

    return (
      <>
        <Modal show={true} onHide={this.props.onClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Your Favorite Sandwich from {location.restaurant}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSave}>
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