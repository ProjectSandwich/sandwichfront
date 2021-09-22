import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class CreateSandwich extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
    };
  }

  handleSumbit = event => {
    event.preventDefault();

    let elements = event.target.elements;
    console.log(event.target.elements);
    let formData = {
      sandwichName: elements.sandwichName.value,
      restaurant: elements.restaurant.value,
      location: elements.location.value,
      description: elements.description.value,
    }
  }

  showModalOnClick = () => {
    this.setState({ showModal: true});
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
              <input placeholder="Sandwhich Name" name="sandwichName" />
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