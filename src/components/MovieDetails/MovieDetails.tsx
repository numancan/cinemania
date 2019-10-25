import React, { SFC, Fragment } from 'react';
import './MovieDetails.scss';

import Backdrop from '../Backdrop';

enum baseUrl {
  poster = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2',
  profil = 'https://image.tmdb.org/t/p/w100_and_h100_bestv2',
}

interface Props {
  selectedMovie: MovieDetails;
  showMoreDetail?: boolean;
}

const MovieDetails: SFC<Props> = ({ selectedMovie, showMoreDetail = false, children }) => (
  <Fragment>
    <Backdrop src={selectedMovie.backdrop_path || ''} />
    <img className="poster" src={baseUrl.poster + selectedMovie.poster_path} alt="poster" />

    <section className="detail">
      <h2 className="title">{selectedMovie.title}</h2>
      <h3>Overview</h3>
      <p>{selectedMovie.overview}</p>

      {showMoreDetail ? (
        <Fragment>
          <h3>Cast</h3>
          {selectedMovie.credits.cast.slice(0, 6).map(({ profile_path: profilPath }) => (
            <img
              className="cast-profil"
              src={baseUrl.profil + profilPath}
              alt="profil"
              key={profilPath}
            />
          ))}

          <h3>Trailer</h3>
          <iframe
            title={selectedMovie.videos.results[0].name}
            width="200"
            height="100"
            src={`https://www.youtube.com/embed/${selectedMovie.videos.results[0].key}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope"
            allowFullScreen
          ></iframe>
        </Fragment>
      ) : null}

      {children}
    </section>
  </Fragment>
);

export default MovieDetails;
