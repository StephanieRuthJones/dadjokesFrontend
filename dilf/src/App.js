import React, { Component } from 'react';
import './App.css';
import Image from './Components/Image'
import Joke from './Components/Joke'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Image />
        <Joke />
      </div>
    );
  }
}

export default App;
