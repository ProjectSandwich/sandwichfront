import axios from 'axios';
import React from 'react';
import SaveSandwich from './SaveSandwich';
import { Modal, Button } from 'react-bootstrap';
import SearchLocation from './SearchLocation';

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

  render() {
    console.log(this.state);
    return (
      <>
        <div>
          <Button className="row justify-content-center" style={{ width: "25%" }}
            onClick={this.showModalOnClick} variant="secondary">Search for Location
          </Button>
          <Modal show={this.state.showModal} onHide={this.handleClose} >
            <Modal.Header closeButton>
              <Modal.Title>Search for a Restaurant
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={this.handleSearch}>
                <input placeholder="City & State" name="location" />
                <input placeholder="Restaurant Name" name="restaurant" />
                <Button variant="secondary" type="submit">Search for Restaurant</Button>
              </form>

              {
                this.state.locations && (
                  <div>
                    <h2>Search Results</h2>
                    {this.state.locations.map(location => (
                      <SearchLocation location={location} setSelectedLocation={this.setSelectedLocation} />
                    ))}
                  </div>
                )
              }
            </Modal.Body>
          </Modal>
        </div>

        {
          this.state.selectedLocation && (
           <SaveSandwich location={this.state.selectedLocation} onClose={this.clearSelectedLocation} />
          )
        }

      </>
    )
  }
}
