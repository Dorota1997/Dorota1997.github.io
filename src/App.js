import React, { Component } from 'react';
import $ from 'jquery';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      foo: 'bar',
      resumeData: {}
    };
  }

  componentDidMount() {
    var langPath = document.documentElement.lang === 'pl' ? '/resumeData.json' : '/resumeDataEN.json';
    this.getResumeData(langPath);
  }

  getResumeData(path) {
    $.ajax({
      url: path,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }


  render() {
    return (
      <div>
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Projects data={this.state.resumeData.projects} />
        <Skills data={this.state.resumeData.resume} />
        <Experience data={this.state.resumeData.experience} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
