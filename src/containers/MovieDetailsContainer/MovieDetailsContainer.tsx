import React, { FC, useEffect, useContext, useState } from 'react';

import { fetchMovieDetailsByID } from '../../services/movieService';
import { SelectedMovieContext } from '../../contexts/SelectedMovieContext';

import Loading from '../../components/Loading';
import MovieDetails from '../../components/MovieDetails';

import './MovieDetailsContainer.scss';

const showtimes: string[] = ['13:00', '16:00', '19:30'];

const MovieDetailsContainer: FC<{ id: string }> = ({ id }) => {
  const { selectedMovie, setSelectedMovie } = useContext(SelectedMovieContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMovieDetailsByID(id)
      .then(res => setSelectedMovie(res))
      .then(() => setIsLoading(false));
  }, [id, setIsLoading, setSelectedMovie]);

  if (isLoading) return <Loading />;
  return <MovieDetails selectedMovie={selectedMovie} showtimes={showtimes} />;
};

export default MovieDetailsContainer;
