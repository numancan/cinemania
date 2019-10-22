import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.scss';

const baseUrl = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';

const MovieCard: FC<{ movie: Movie }> = ({ movie }) => (
  <div className="movie-card">
    <Link to={`/movies/${movie.id}`}>
      <img className="poster" src={baseUrl + movie.poster_path} alt="poster" />
    </Link>
    <h4 className="title">{movie.title}</h4>
  </div>
);

export default MovieCard;
