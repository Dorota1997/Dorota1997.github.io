import React, { Component } from 'react';

class Projects extends Component {
  render() {
    if (this.props.data) {
      console.log(this.props.data);
      var projects = this.props.data.map(function (projects) {
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} title={projects.title}>
                <img alt={projects.images[0]} src={projects.images[0]} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    {/* <p>{projects.category}</p> */}
                  </div>
                </div>
                <div className="link-icon">
                  <i className="fa fa-link"></i>
                </div>
              </a>
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
      </section>
    );
  }
}

export default Projects;
