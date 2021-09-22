import React from 'react';

export default class SandwichMarker extends React.Component {
  render() {
    const{sandwich}=this.props
    //const SandwichMarker = ({ sandwich }) => <div onClick={() => console.log(sandwich)} style={{fontSize: '50px'}}>🥪</div>;
    return(
      <div onClick={() => console.log(sandwich)} style={{fontSize: '50px'}}>🥪</div>
    );
  }
}