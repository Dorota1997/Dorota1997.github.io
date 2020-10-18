import React, { Component } from 'react';

class Footer extends Component {
  render() {
    if (this.props.data) {
      console.log(this.props.data.social);
      var networks = this.props.data.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url}>
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    return (
      <footer>
        <div className="col-md-12">
          <div className="social-links">{networks}</div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>Copyright &copy; Dorota Gil</small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
