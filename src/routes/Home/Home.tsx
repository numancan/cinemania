import React, { FC, Fragment, useState, useEffect } from 'react';
import InTheatersContainer from '../../containers/InTheatersContainer';
import RandomMovie from '../../components/RandomMovie';
import { fetchMovies } from '../../services/movieService';
import Loading from '../../components/Loading';

const random = (value: number) => Math.floor(Math.random() * value);

const Home: FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [randomMovie, setRandomMovie] = useState<Movie>();

  useEffect(() => {
    fetchMovies().then(res => setMovies(res));
  }, []);

  useEffect(() => {
    setRandomMovie(movies[random(movies.length)]);
  }, [movies]);

  if (!randomMovie) return <Loading />;
  return (
    <Fragment>
      <RandomMovie movie={randomMovie} />
      <InTheatersContainer movies={movies} />
    </Fragment>
  );
};

export default Home;
