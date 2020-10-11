import React, { Component } from 'react';

class Experience extends Component {
  render() {
    if (this.props.data) {
      var work = this.props.data.work.map(function (work, i) {
        return (
          <div key={i} className="pb-5 col-md-12">
            <p className="info">
              {work.years}
              <br />
              {work.company}
              <br />
              {work.title}
            </p>
            <p className="col-md-6 experience-desc">{work.description}</p>
          </div>
        );
      });
    }

    return (
      <section id="resume">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: 'black' }}>
              <span className="text-black">Doświadczenie</span>
            </h1>
          </div>
          <div className="col-md-12 work main-col">{work}</div>
        </div>
      </section>
    );
  }
}

export default Experience;
