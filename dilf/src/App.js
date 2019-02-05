import React, { Component } from 'react';
import './App.css';
import Date from './Components/Date'
import Image from './Components/Image'
import Joke from './Components/Joke'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jokes: []
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:3000')
    const json = await response.json()
    this.setState({ jokes: json })
    this.generateJoke()
  }
  //ternary for card vs loading bc loading delay for backend

  getRandomIntInclusive = (max) => {
    const min = 0
    return Math.floor(Math.random() * (max - min)) + min
  }

  generateJoke = () => {
    console.log('gen joke clicked')
    const randomIndex = this.getRandomIntInclusive(this.state.jokes.length)
    const method = this.state.jokes[randomIndex]
    console.log(method)
    this.setState({
      id: jokes.id,
      joke: jokes.joke,
    })
  }
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
