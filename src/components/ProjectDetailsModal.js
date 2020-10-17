import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSliderStyles from 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
class ProjectDetailsModal extends Component {
  render() {
    if (this.props.data) {
      const technologies = this.props.data.technologies;
      const images = this.props.data.images;
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
        if (this.props.data.images) {
          var img = images.map((elem, i) => {
            return <div key={i} data-src={elem} />;
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
          <div className="col-md-12" style={{ paddingBottom: '50px' }}>
            <AwesomeSlider
              cssModule={AwesomeSliderStyles}
              animation="cubeAnimation"
            >
              {img}
            </AwesomeSlider>
          </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ProjectDetailsModal;
