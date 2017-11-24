/* eslint react/no-did-mount-set-state: 0, no-console: 0 */
import React, { Component } from 'react';
import styled from 'styled-components';

// Import child components
import MoviePreview from './MoviePreview';

export default class MovieList extends Component {
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
      <MovieGrid>
        {this.state.movies.map(movie => <MoviePreview key={movie.id} {...movie} />)}
      </MovieGrid>
    );
  }
}

const MovieGrid = styled.div`
  display: flex;
  padding: 40px 20px;
  flex-wrap: wrap;
`;
