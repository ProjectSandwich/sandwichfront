import React from 'react';
import CreateSandwich from './CreateSandwich';
// import GoogleMapReact from 'google-map-react';
import Map from './map';

export default class MapPage extends React.Component {

/* We need to make a handleSave = async to be able to save our new sandwich to our database from our form */

  render() {
    return (
      <>
        <Map />
        <CreateSandwich onSave={this.handleSave} />
      </>
    )
  }
};