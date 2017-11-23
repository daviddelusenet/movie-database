import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Movie extends Component {
  static propTypes = {
    movie: PropTypes.shape({
      desc: PropTypes.string.isRequired,
      title: PropTypes.string
    })
  };

  static defaultProps = {
    desc: 'Description not available'
  };

  render() {
    return(
      <div>
        <h3 className="Movie__title">{this.props.movie.title}</h3>
        <p className="Movie__desc">{this.props.movie.desc}</p>
      </div>
    );
  }
};
