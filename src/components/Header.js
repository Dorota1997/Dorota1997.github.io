import React, { Component } from 'react';
import { GreatThings } from 'moving-letters'

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var title = this.props.data.title;
    }

    return (
      <header id="home">
        <div className="row banner">
          <div className="banner-text">
            <GreatThings text={'Cześć jestem ' + name} />
            <h5 className="mx-auto">{title}</h5>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
