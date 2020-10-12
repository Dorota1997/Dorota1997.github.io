import React, { Component } from 'react';

class Experience extends Component {
  render() {
    if (this.props.data) {
      var work = this.props.data.work.map(function (work, i) {
        return (
          <div key={i} className="col-md-10 mx-auto">
            <hr/>
            <div className="row mt-5 mb-4">
              <div className="col-md-6" style={{textAlign: 'left', float: 'left'}}>
                <p className="info">
                  {work.years}
                  <br />
                  {work.company}
                  <br />
                  {work.title}
                </p>
              </div>
              <div className="col-md-6" style={{float: 'right'}}>
                <p className="col-md-12 experience-desc">{work.description}</p>
              </div>
            </div>
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
          <div className="col-md-12 work main-col">{work}<hr/></div>
        </div>
      </section>
    );
  }
}

export default Experience;
