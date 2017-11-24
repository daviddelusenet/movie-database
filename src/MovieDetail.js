/* eslint react/no-did-mount-set-state: 0, no-console: 0 */
import React, { Component } from 'react';

const PosterPath = 'http://image.tmdb.org/t/p/w154';

export default class MovieDetail extends Component {
  state = {
    movie: []
  };

  async componentDidMount() {
    try {
      const Res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=ac79f02ad78d416cdde11b89e561391a&language=en-US`);
      const Movie = await Res.json();
      this.setState({
        movie: Movie
      });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { movie } = this.state;

    return (
      <div>
        <img alt={movie.title} src={PosterPath + movie.poster_path} />
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    );
  }
}
