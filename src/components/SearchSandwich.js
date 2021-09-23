import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const apiUrl = process.env.REACT_APP_SERVER

export default class SearchSandwich extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
    };
  }

  handleSearch = async event => {
    event.preventDefault();

    let elements = event.target.default;
    let formData = {
      sandwich: 
      restaurant:
    }
  }

    getYelpData =

      render() {
      return (
        <>

        </>
      )
    }
  }
