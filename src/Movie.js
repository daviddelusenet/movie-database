import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PosterPath = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (
  <div>
    <Link to={`/movies/${movie.id}`}>
      <img alt={movie.title} src={PosterPath + movie.poster_path} />
    </Link>
  </div>
);

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};

export default Movie;
