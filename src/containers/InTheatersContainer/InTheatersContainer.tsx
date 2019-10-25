import React, { FC } from 'react';
import './InTheatersContainer.scss';

import MovieCard from '../../components/MovieCard';

const InTheatersContainer: FC<{ movies: Movie[] }> = ({ movies }) => (
  <div className="in-theaters">
    <h1 className="title">In Theaters</h1>
    <div className="movies">
      {movies.map((movie: Movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  </div>
);

export default InTheatersContainer;
