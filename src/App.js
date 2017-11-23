import React, { Component } from 'react';
import './App.css';

// Import child components
import Movie from './Movie';

const Movies = [
  {
    "id": 1,
    "title": "Casino",
    "desc": "A tale of greed, deception, money, power, and murder occur between two best friends: a mafia enforcer and a casino executive, compete against each other over a gambling empire, and over a fast living and fast loving socialite."
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <h1 className="App__title">Movie Database</h1>
        </header>
        {Movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
      </div>
    );
  }
}

export default App;
