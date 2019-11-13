import React, { SFC } from 'react';
import { Link } from 'react-router-dom';

import Backdrop from '../Backdrop';
import CastCard from '../CastCard';
import Button from '../Button';

import './MovieDetails.scss';

enum baseUrl {
  poster = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2',
  profil = 'https://image.tmdb.org/t/p/w100_and_h100_bestv2',
}

interface Props {
  selectedMovie: MovieDetails;
  showtimes: string[];
}

const MovieDetails: SFC<Props> = ({ selectedMovie, showtimes }) => {
  const renderGenres = () => selectedMovie.genres.map(genre => genre.name).join(', ');

  const renderShowtimes = () =>
    showtimes.map(showtime => (
      <p className="button" key={showtime}>
        <Link to={{ pathname: '/ticketing', state: { showtime } }}>{showtime}</Link>
      </p>
    ));

  const renderCast = () =>
    selectedMovie.credits.cast.slice(0, 6).map(cast => <CastCard cast={cast} key={cast.id} />);

  const goTrailer = () => {
    window.location.href = `https://youtu.be/${selectedMovie.videos.results[0].key}`;
  };

  return (
    <div className="movie-details">
      <div className="movie-detail-back">
        <Backdrop src={selectedMovie.backdrop_path || ''} classNames="no-stretch-height" />
      </div>
      <div className="inner wrapper">
        <img className="poster" src={baseUrl.poster + selectedMovie.poster_path} alt="poster" />
        <div className="content">
          <h1>{selectedMovie.title}</h1>
          <h3 className="subheader">
            Genre:<span>{renderGenres()}</span>
          </h3>

          <h3 className="subheader">
            Duration:<span>{selectedMovie.runtime} minute</span>
          </h3>

          <h3 className="subheader">
            Rating:<span>{selectedMovie.vote_average}</span>
          </h3>

          <div className="buttons">
            <details className="details">
              <summary className="button secondary">Buy Ticket</summary>
              {renderShowtimes()}
            </details>
            <Button onClick={goTrailer}>Trailer</Button>
          </div>
        </div>
      </div>

      <section className="more-detail wrapper">
        <h2 className="subheader">Overview</h2>
        <p className="overview">{selectedMovie.overview}</p>

        <h2 className="subheader">Cast</h2>
        <section className="cast-cards">{renderCast()}</section>
      </section>
    </div>
  );
};

export default MovieDetails;
