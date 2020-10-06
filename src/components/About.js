import React, { Component } from 'react';

class About extends Component {
  render() {
    if (this.props.data) {
      var profilepic= "images/"+this.props.data.image;
      var about = this.props.data.description;
    }

    return (
      <section id="about">
         <div className="row">
            <div className="twelve columns">
               <div className="three columns">
                  <img className="profile-picture"  src={profilepic} alt="Tim Baker Profile Pic"/>
               </div>
                  <div className="nine columns">
                     <p>{about}</p>
                  </div>
            </div>
         </div>
      </section>
    );
  }
}

export default About;