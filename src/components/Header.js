import React, { Component } from 'react';
import Typical from 'react-typical';

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var title = this.props.data.title;
    }

    return (
      <header id="home">
        <div className="row banner">
          <h1>
            <Typical steps={[name]} wrapper="p" />
          </h1>
          <h1>
            <Typical steps={[title]} wrapper="p" />
          </h1>
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
