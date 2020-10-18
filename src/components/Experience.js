import React, { Component } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Badge from 'react-bootstrap/Badge';

class Experience extends Component {
  render() {
    if (this.props.data) {
      var work = this.props.data.map(function (work, i) {
        const technologies = work.technologies;

        var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={work.years}
            iconStyle={{ background: '#66b2ff', color: '#fff' }}
            icon={<i className="fas fa-shopping-bag experience-icon"></i>}
            key={i}
          >
            <div style={{ textAlign: 'left', marginBottom: '13px' }}>
              {tech}
            </div>

            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: 'left' }}
            >
              {work.title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: 'left' }}
            >
              {work.company}
            </h4>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: 'black' }}>
              <span className="text-black" style={{ textAlign: 'center' }}>
                Doświadczenie
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{ background: '#66b2ff', color: '#fff' }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
