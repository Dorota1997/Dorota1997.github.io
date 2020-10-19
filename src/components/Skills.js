import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

class Skills extends Component {
  render() {
    if (this.props.data) {
      var skills = this.props.data.skills.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
          <a>
            <div className="text-center">
              <i className={skills.class} style={{ fontSize: '300%' }}>
                <p className="text-center" style={{ fontSize: '30%', marginTop: '4px' }}>
                  {skills.name}
                </p>
              </i>
            </div>
          </a>
        </li>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">Umiejętności</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
