import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header'

import Image from './Components/Image'
import Joke from './Components/Joke'
import DateComponent from './Components/Date';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jokes: []
    }
  }

  async componentDidMount() {
    const response = await fetch('https://silly-dilf.herokuapp.com/')
    const json = await response.json()
    this.setState({ jokes: json })
    this.generateJoke()
  }

  getRandomIntInclusive = (max) => {
    const min = 0
    return Math.floor(Math.random() * (max - min)) + min
  }

  generateJoke = () => {
    const randomIndex = this.getRandomIntInclusive(this.state.jokes.length)
    const joke = this.state.jokes[randomIndex]
    console.log(joke)
    this.setState({
      id: joke.id,
      joke: joke.text,
      url: joke.url
    })
  }

  render() {
    return (
      <div className="appcontainer">
        <Header />
        <DateComponent />
        <Image
          url={this.state.url} />
        <Joke
          joke={this.state.joke} />
      </div>
    );
  }

}
}
export default App;
