import React, { Component } from 'react';

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var title = this.props.data.title;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h3>Cześć, jestem {name}</h3>
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
