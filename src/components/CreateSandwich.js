import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class CreateSandwich extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    let elements = event.target.elements;
    let formData = {
      sandwich: elements.sandwich.value,
      restaurant: elements.restaurant.value,
      location: elements.location.value,
      description: elements.description.value,
    }
    console.log('saving', formData);

    this.props.onCreate(formData);

    event.target.reset();
    elements.sandwich.focus();
  }

  showModalOnClick = () => {
    console.log('Modal is showing!')
    this.setState({ showModal: true });
  }

  handleClose = () => {
    console.log('Please hide modal');
    this.setState({ showModal: false });
  }

  render() {
    return (
      <>
        <Button className="row justify-content-center" style={{ width: "25%" }}
          onClick={this.showModalOnClick} variant="secondary">Add a Sandwich
        </Button>
        <Modal show={this.state.showModal} onHide={this.handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>Add your best sandwich experience to the map!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form method="post" onSubmit={this.handleSubmit}>
              <input placeholder="Sandwich Name" name="sandwich" />
              <input placeholder="Restaurant" name="restaurant" />
              <input placeholder="Location" name="location" />
              <input placeholder="Why did you love it?!" name="description" />
              <Button onClick={this.handleClose} variant="secondary" type="submit">Save Sandwich</Button>
            </form>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}