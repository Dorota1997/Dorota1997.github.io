import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class ProjectDetailsModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <a onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </a>
      </Modal>
    );
  }
}

export default ProjectDetailsModal;
