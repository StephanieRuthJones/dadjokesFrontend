import React, { Component } from 'react';
import './App.css';
import Date from './Components/Date'
import Image from './Components/Image'
import Joke from './Components/Joke'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Date />
        <Image />
        <Joke />
      </div>
    );
  }
}

export default App;
