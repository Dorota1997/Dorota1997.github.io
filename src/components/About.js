import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Icon, InlineIcon } from '@iconify/react';
import angularIcon from '@iconify/icons-logos/angular-icon';
import reactIcon from '@iconify/icons-logos/react';

class About extends Component {
  render() {
    if (this.props.data) {
      var profilepic = 'images/' + this.props.data.image;
      var about = this.props.data.description;
      var clip = 'images/' + this.props.data.clip;
    }

    return (
      <section id="about" style={{ backgroundColor: '#fff' }}>
        <div className="col-md-12">
          <h1 style={{ color: 'black' }}>
            <span>O mnie</span>
          </h1>
          <div className="row center mx-auto">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <a style={{cursor: "auto"}}>
                  <img
                    height="250"
                    src={profilepic}
                    alt="Dorota Gil Profile Pic"
                  />
                  <Icon
                    icon={angularIcon}
                    style={{ fontSize: '400%', margin: '9% 5% 0 5%' }}
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: '400%', margin: '9% 5% 0 5%' }}
                  />
                </a>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <img
                  src={clip}
                  style={{
                    width: '50px',
                    textAlign: 'center',
                    position: 'absolute',
                    top: '-50px',
                    right: '44%',
                  }}
                />
                <Jumbotron className="jumbotron">
                  <span className="wave">👋</span>
                  <p style={{ fontSize: '15px', textAlign: 'justify' }}>
                    {about}
                  </p>
                </Jumbotron>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
