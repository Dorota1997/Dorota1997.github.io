import React, { Component } from 'react';

class About extends Component {
  render() {
    if (this.props.data) {
      var profilepic = 'images/' + this.props.data.image;
      var about = this.props.data.description;
    }

    return (
      <section id="about">
        <div className="col-md-12 p-0 m-0">
          <img
            className="profile-picture"
            src={profilepic}
            alt="Dorota Gil Profile Pic"
          />
          <p>{about}</p>
        </div>
      </section>
    );
  }
}

export default About;
