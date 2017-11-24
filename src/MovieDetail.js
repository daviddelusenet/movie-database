/* eslint react/no-did-mount-set-state: 0, no-console: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { POSTER_PATH, BACKDROP_PATH } from './Consts';

export default class MovieDetail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  };

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
      <MovieDetailWrapper backgroundImage={BACKDROP_PATH + movie.backdrop_path}>
        <Info>
          <Poster alt={movie.title} src={POSTER_PATH + movie.poster_path} />
          <Text>
            <Title>{movie.title}</Title>
            <ReleaseDate>{movie.release_date}</ReleaseDate>
            <Overview>{movie.overview}</Overview>
          </Text>
        </Info>
      </MovieDetailWrapper>
    );
  }
}

const MovieDetailWrapper = styled.div`
  padding: 50vh 0 0;
  background-image: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Info = styled.div`
  display: flex;
  padding: 0 40px 40px;
  flex-wrap: nowrap;
  background-color: white;
`;

const Poster = styled.img`
  display: block;
  margin: -50px 0 0;
  box-shadow: 0 0 35px black;
  flex: 0 0 auto;
`;

const Text = styled.div`
  padding: 40px 40px 0;
  flex: 1 1 auto;
`;

const Title = styled.h1`
  margin: 0 0 20px;
  font-size: 30px;
`;

const ReleaseDate = styled.p`
  margin: 0 0 20px;
  font-size: 16px;
`;

const Overview = styled.p`
  max-width: 660px;
  font-size: 18px;
`;
