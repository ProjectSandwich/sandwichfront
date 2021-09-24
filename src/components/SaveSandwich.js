import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
const SERVER = process.env.REACT_APP_SERVER;

export default class SaveSandwich extends React.Component {
 
  handleSave = async event => {
    event.preventDefault();

    let elements = event.target.elements;
    let formData = {
      sandwich: elements.sandwich.value,
      description: elements.description.value,
      latitude: this.props.location.lat,
      longitude: this.props.location.lon,
      yelpUrl: this.props.location.yelpUrl,
      restaurant: this.props.location.restaurant,
    }
    console.log(formData);

    let apiUrl = `${SERVER}/sandwiches`;
    let results = await axios.post(apiUrl, formData);
    let newSandwich = results.data;
    console.log('New Sandwich', newSandwich);

    this.props.onSave();

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
            <Modal.Title>Add Your Favorite Sandwich from {location.restaurant} to the map!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSave}>
              <Form.Group>
              <Form.Control placeholder="Sandwich Name" name="sandwich" />
              <Form.Control as="textarea" placeholder="Tell us why it is so good?!" name="description" rows={4} />
              <Button variant="secondary" type="submit">Save Sandwich</Button>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}