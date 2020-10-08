import React, { Component } from 'react';

class Skills extends Component {
  render() {
    if (this.props.data) {
      var skills = this.props.data.skills.map(function (skills, i) {
        return (
          <div className="col-md-12" key={i}>
            <div className="row mt-4" >
              <div className="col-md-3">
                <i className={skills.class}><p className="mr-3 ml-3">{skills.name}</p></i>
              </div>
              <div className="col-md-9">
                <div className="progress progress-value">
                  <div className="progress-bar bg-warning w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="skills" >
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">Umiejętności</span>
            </h1>
          </div>
          <div className="col-md-12 mx-auto"> 
            <div className="col-md-10 mx-auto">
              <div className="skill-icon">{skills}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
