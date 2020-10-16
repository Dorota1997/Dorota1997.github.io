import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class ProjectDetailsModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.data) {
      const technologies = this.props.data.technologies;
      var title = this.props.data.title;
      var description = this.props.data.description;
      if (this.props.data.technologies) {
        {
          var tech = technologies.map((icons, i) => {
            return (
              <li className="list-inline-item mx-3" key={i}>
                <a>
                  <div className="text-center">
                    <i className={icons.class} style={{ fontSize: '300%' }}>
                      <p className="text-center" style={{ fontSize: '30%' }}>
                        {icons.name}
                      </p>
                    </i>
                  </div>
                </a>
              </li>
            );
          });
        }
      }
    }
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
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-7"></div>
            <div className="col-md-5">
              <h3>{title}</h3>
              <p className="modal-description">{description}</p>
              <div className="col-md-12 text-center">
                <ul className="list-inline mx-auto">{tech}</ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ProjectDetailsModal;
