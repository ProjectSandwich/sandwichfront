import React from 'react';

export default class SearchLocation extends React.Component {
  render() {
    const location = this.props.location

    return (
      <div>
        {location.restaurant}
      </div>
    )
  }
}