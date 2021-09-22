import React from 'react';
import CreateSandwich from './CreateSandwich';
import axios from 'axios';
import Map from './map';
// import SandwichMarker from './map';

const SERVER = process.env.REACT_APP_SERVER;

export default class MapPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { sandwiches: [] };
  }
  
  componentDidMount() {
    this.fetchSandwiches();
  }

    async fetchSandwiches() {
      let apiURL = `${SERVER}/getSandwiches`;
      console.log('xxxxxxxxxx',apiURL);
      try {
        let results = await axios.get(apiURL);
        console.log('yyyyyyyy',results);

        this.setState({ sandwiches: results.data })
      
      } catch (err) {
        console.log(err);
      }
    }

  handleCreate = async sandwichInfo => {
    let apiURL = `${SERVER}/getSandwiches`;
    let results = await axios.post(apiURL, sandwichInfo);
    let newSandwich = results.data;
    console.log(newSandwich);
  }

  render() {
    return (
      <>
        <Map sandwiches={this.state.sandwiches} />
        
        <CreateSandwich onCreate={this.handleCreate} />
      </>
    )
  }
}