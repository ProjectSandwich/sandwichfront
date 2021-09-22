import React from 'react';
import CreateSandwich from './CreateSandwich';
// import GoogleMapReact from 'google-map-react';
import Map from './map';

export default class MapPage extends React.Component {
  render() {
    return (
      <>
        <Map />
        <CreateSandwich />
      </>
    )
  }
};