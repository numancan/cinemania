import React, { FC, useEffect, useContext, useState } from 'react';
import './MovieDetailsContainer.scss';

import { fetchMovieDetailsByID } from '../../services/movieService';
import { SelectedMovieContext } from '../../contexts/SelectedMovieContext';

import Button from '../../components/Button';
import Loading from '../../components/Loading';
import Showtimes from '../../components/Showtimes';
import MovieDetails from '../../components/MovieDetails';

const MovieDetailsContainer: FC<{ id: string }> = ({ id }) => {
  const { selectedMovie, setSelectedMovie } = useContext(SelectedMovieContext);
  const [showShowtimes, setShowShowtimes] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMovieDetailsByID(id)
      .then(res => setSelectedMovie(res))
      .then(() => setIsLoading(false));
  }, [id, setIsLoading, setSelectedMovie]);

  if (isLoading) return <Loading />;
  return (
    <div className="movie-details">
      <MovieDetails selectedMovie={selectedMovie} showMoreDetail>
        <h3> </h3>
        <Button onClick={() => setShowShowtimes(true)} value="Buy Ticket" />
        {showShowtimes ? <Showtimes setShowShowtimes={setShowShowtimes} /> : null}
      </MovieDetails>
    </div>
  );
};

export default MovieDetailsContainer;
