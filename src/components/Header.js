import React, { Component } from 'react';
import Typical from 'react-typical';
import Switch from 'react-switch';

class Header extends Component {
  constructor() {
    super();
    this.state = { checked: false, language: 'pl' };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = 'data-theme';
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === 'dark' ? 'light' : 'dark';
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  componentDidMount() {
    this.setLanguage('pl', 'polish-flag');
  }

  setLanguage(language, idName) {
    document.getElementById(idName).removeAttribute('filter', 'brightness(40%)');
    var flagId = language === 'pl' ? 'english-flag' : 'polish-flag';
    document.getElementById(flagId).setAttribute('filter', 'brightness(40%)')
    document.documentElement.lang = language;
  }

  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var title = this.props.data.title;
    }

    return (
      <header id="home">
        <div className="row banner">
          <div style={{ paddingBottom: '60px' }}>
            <h1>
              <Typical steps={[name]} wrapper="p" />
            </h1>
            <h1>
              <Typical steps={[title]} wrapper="p" />
            </h1>
          </div>

          <Switch
            checked={this.state.checked}
            onChange={this.onThemeSwitchChange}
            offColor="#baaa80"
            onColor="#353535"
            className="react-switch mx-auto"
            width={90}
            height={40}
            uncheckedIcon={
              <span
                className="iconify"
                data-icon="twemoji:owl"
                data-inline="false"
                style={{
                  display: 'block',
                  height: '100%',
                  fontSize: 25,
                  textAlign: 'end',
                  marginLeft: '20px',
                  color: '#353239',
                }}
              ></span>
            }
            checkedIcon={
              <span
                className="iconify"
                data-icon="noto-v1:sun-with-face"
                data-inline="false"
                style={{
                  display: 'block',
                  height: '100%',
                  fontSize: 25,
                  textAlign: 'end',
                  marginLeft: '10px',
                  color: '#353239',
                }}
              ></span>
            }
            id="icon-switch"
          />
          <div className="col-md-12 mx-auto mt-4" style={{ fontSize: '25px' }}>
            <div
              onClick={() => this.setLanguage('pl', 'polish-flag')}
              style={{display:'inline'}}>
              <span
                className="iconify mr-5"
                data-icon="twemoji-flag-for-flag-poland"
                data-inline="false"
                style={{ fontSize: '50px', cursor: 'pointer' }}
                id="polish-flag"
              ></span>
            </div>
            <div
              onClick={() => this.setLanguage('en', 'english-flag')}
              style={{display:'inline'}}>
              <span
                className="iconify"
                data-icon="twemoji-flag-for-flag-united-kingdom"
                data-inline="false"
                style={{ fontSize: '50px', cursor: 'pointer' }}
                id="english-flag"
              ></span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
