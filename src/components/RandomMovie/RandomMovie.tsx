import React, { SFC } from 'react';
import { Link } from 'react-router-dom';
import './RandomMovie.scss';

import Backdrop from '../Backdrop';

const RandomMovie: SFC<{ movie: Movie }> = ({ movie }) => (
  <Link to={`/movies/${movie.id}`}>
    <div className="random-movie">
      <Backdrop src={movie.backdrop_path} classNames="blur-light no-stretch-height" />
      <h2 className="title">{movie.title}</h2>
    </div>
  </Link>
);

export default RandomMovie;
