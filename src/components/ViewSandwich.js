import React from 'react';
import { Modal } from 'react-bootstrap';

class ViewSandwich extends React.Component {
  
  render() {

    if(!this.props.show){
      return null;
    }

    return (
    <>
      <Modal
        size="sm"
        show={this.showModal}
        onHide={() => this.hideModal(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </>
  );
  }
}

export default ViewSandwich;