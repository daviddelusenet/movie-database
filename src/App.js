import React, { Component } from 'react';
import './App.css';

// Import child components
import Movie from './Movie';

const Movies = [
  {
    "id": 1,
    "title": "Best movie ever"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movie Database</h1>
        </header>
        {Movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
      </div>
    );
  }
}

export default App;
