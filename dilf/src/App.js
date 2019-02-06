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
    const response = await fetch('http://localhost:8000')
    const json = await response.json()
    this.setState({ jokes: json })
    this.generateJoke()
  }
  //ternary for card vs loading bc loading delay for backend
  formatDate = (date) => {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();



    this.setState({ date: { day + ' ' + monthNames[monthIndex] + ' ' + year } })
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
    <div className="container">
      <Date />
      <Image
        url={this.state.url} />
      <Joke
        joke={this.state.joke} />
    </div>
  );
}
}

export default App;
