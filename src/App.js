/* eslint react/no-did-mount-set-state: 0, no-console: 0 */
import React, { Component } from 'react';
import './App.css';

// Import child components
import Movie from './Movie';

export default class App extends Component {
  state = {
    movies: []
  };

  async componentDidMount() {
    try {
      const Res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=ac79f02ad78d416cdde11b89e561391a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const Movies = await Res.json();
      this.setState({
        movies: Movies.results
      });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <h1 className="App__title">Movie Database</h1>
        </header>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
    );
  }
}
