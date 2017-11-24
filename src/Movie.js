import React from 'react';
import PropTypes from 'prop-types';

const PosterPath = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (
  <div>
    <img alt={movie.title} src={PosterPath + movie.poster_path} />
  </div>
);

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};

export default Movie;
