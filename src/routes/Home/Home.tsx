import React, { FC, Fragment, useState, useEffect } from 'react';

import { fetchMovies } from '../../services/movieService';

import InTheatersContainer from '../../containers/InTheatersContainer';
import RandomMovie from '../../components/RandomMovie';
import Loading from '../../components/Loading';
import Carousel from '../../components/Carousel';
import Backdrop from '../../components/Backdrop';

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
      <Carousel movies={movies} />
    </Fragment>
  );
};

export default Home;
