import React, { Component } from 'react';
import ProjectDetailsModal from './ProjectDetailsModal';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: [],
      detailsModalShow: false,
    };
  }

  
  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.data) {
      var projects = this.props.data.map(function (projects) {
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <div title={projects.title} onClick={() => detailsModalShow(projects)}>
                <img alt={projects.images[0]} src={projects.images[0]} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                  </div>
                </div>
                <div className="link-icon">
                  <i className="fa fa-link"></i>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: 'black' }}>
            <span>Projekty</span>
          </h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
        </div>
        <ProjectDetailsModal
          show={this.state.detailsModalShow}
          onHide={detailsModalClose}
        />
      </section>
    );
  }
}

export default Projects;
