import axios from 'axios';
import React from 'react';
import SaveSandwich from './SaveSandwich';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import SearchLocation from './SearchLocation';
import './SearchSandwich.css';
import Form from 'react-bootstrap/Form'

const apiUrl = process.env.REACT_APP_SERVER

export default class SearchSandwich extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      locations: null,
      selectedLocation: null,
    };
  }

  handleSearch = async event => {
    event.preventDefault();

    let elements = event.target.elements;
    let formData = {
      location: elements.location.value,
      restaurant: elements.restaurant.value,
    }
    console.log(formData);

    this.getYelpData(formData);
  }

  getYelpData = async (search) => {
    const response = await axios.get(`${apiUrl}/yelpData`, {
      params: {
        location: search.location,
        term: search.restaurant,
      }
    });

    const locations = response.data;
    this.setState({ locations });

  }

  showModalOnClick = () => {
    this.setState({ showModal: true });
  }

  handleClose = () => {
    this.setState({ showModal: false });
  }

  clearSelectedLocation = () => {
    this.setState({ selectedLocation: null, showModal: true })
  }

  setSelectedLocation = (location) => {
    this.setState({ selectedLocation: location, showModal: false })

  }

  handleSave = () => {
    this.setState({ showModal: false, selectedLocation: null })
  }

  render() {
    console.log(this.state);
    return (
      <>
        <Button className="searchButton" style={{ width: "15%" }}
          onClick={this.showModalOnClick} variant="secondary">Add Your Own Sandwich
        </Button>
        <Modal show={this.state.showModal} onHide={this.handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>Whereabouts?
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              Where did you have your sandwich?
            <Form onSubmit={this.handleSearch}>
              <Form.Group>
              <Form.Control placeholder="City, State" name="location" />
              <Form.Control placeholder="Restaurant Name (optional)" name="restaurant" />
              <Button variant="secondary" type="submit">SUBmit</Button>
            </Form.Group>
            </Form>
            {
              this.state.locations && (
                <Container>
                  <Row>
                    <h2>Search Results - Click on location</h2>
                    {this.state.locations.map((location, idx) => (
                      <Col key={idx}>
                        <SearchLocation location={location} setSelectedLocation={this.setSelectedLocation} />
                      </Col>
                    ))}
                  </Row>
                </Container>
              )
            }
          </Modal.Body>
        </Modal>
        <SaveSandwich onSave={this.handleSave} location={this.state.selectedLocation} onClose={this.clearSelectedLocation} />
      </>
    )
  }
}
