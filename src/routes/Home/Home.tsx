import React, { FC, useState, useEffect } from 'react';

import { fetchMovies } from '../../services/movieService';

import Loading from '../../components/Loading';
import Carousel from '../../components/Carousel';
import Backdrop from '../../components/Backdrop';
import MovieCard from '../../components/MovieCard';

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
    <div style={{ position: 'relative' }}>
      <Carousel>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Carousel>

      <Backdrop src={randomMovie.backdrop_path} classNames="blur-light no-stretch-height" />
    </div>
  );
};

export default Home;
