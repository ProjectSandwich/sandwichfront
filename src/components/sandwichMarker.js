import React from 'react';
import { Modal } from 'react-bootstrap';

export default class SandwichMarker extends React.Component {
  constructor() {
    super()

    this.state = {
      show: false,
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const { sandwich } = this.props
    return (
      <><div onClick={this.showModal} style={{ fontSize: '50px' }}>🥪</div>
        <div>
          <Modal
            size="sm"
            show={this.state.show}
            onHide={this.hideModal}
          >
            {sandwich.sandwich}


          </Modal>
        </div>
      </>

    );
  }
}