import axios from 'axios';
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import SearchLocation from './SearchLocation';

const apiUrl = process.env.REACT_APP_SERVER

export default class SearchSandwich extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      locations: null,
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

  render() {
    console.log(this.state);
    return (
      <>
        <form onSubmit={this.handleSearch}>
          <input placeholder="City & State" name="location" />
          <input placeholder="Restaurant Name" name="restaurant" />
          <Button variant="secondary" type="submit">Search for Restaurant</Button>
        </form>
      
      {this.state.locations && (
        <>
        <h2>Search Results</h2>
        {this.state.locations.map(location => (
          <SearchLocation location={location} />
        ))}
        </>
      )}
      </>
    )
  }
}
