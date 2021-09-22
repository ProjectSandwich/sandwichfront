import React from 'react';
import CreateSandwich from './CreateSandwich';
import axios from 'axios';
// import GoogleMapReact from 'google-map-react';
import Map from './map';
const SERVER = process.env.REACT_APP_SERVER;

export default class MapPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sandwiches: null,
    };
  }

  handleCreate = async sandwichInfo => {
    let apiURL = `${SERVER}/getSandwiches`;
    let results = await axios.post(apiURL, sandwichInfo);
    let newSandwich = results.data;
    console.log(newSandwich);

    this.fetchSandwiches();
  }

  render() {
    return (
      <>
        <Map />
        <CreateSandwich onCreate={this.handleCreate} />
      </>
    )
  }
}