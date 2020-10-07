import React, { Component } from 'react';

class Skills extends Component {
  render() {
    if (this.props.data) {
      var skills = this.props.data.skills.map(function (skills, i) {
        return (
          <i className={skills.class} key={i}>
            <p className="text-center">{skills.name}</p>
          </i>
        );
      });
    }

    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="row text-white">
              <div className="twelve columns">
                <h1>
                  <span className="text-white">Umiejętności</span>
                </h1>
              </div>
            </div>
            <div className="twelve columns skill-icon">{skills}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
