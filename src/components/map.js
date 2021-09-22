import React from 'react';
import GoogleMapReact from 'google-map-react';

const key = process.env.REACT_APP_GMAPS_KEY;

const SandwichMarker = ({ text }) => <div style={{fontSize: '50px'}}>🥪</div>;

export default class Map extends React.Component {
  render(){
    const defaultProps = {
      center: {
        lat: 42.0667,
        lng: -93.4
      },
      zoom: 7
    };
  
    return (
      <div style={{ height: '100vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <SandwichMarker
            lat={42.0667}
            lng={-93.4}
          />
        </GoogleMapReact>
      </div>
    );
  }
}