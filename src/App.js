import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import About from './components/About';
class App extends Component {

  constructor(props){
    super();
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <About data={this.state.resumeData.main}/>
      </div>
    );
  }

}

export default App;
