import React, { FC, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { SelectedMovieContext } from '../../contexts/SelectedMovieContext';

import Button from '../../components/Button';
import Backdrop from '../../components/Backdrop';

import './Successful.scss';

interface RouteState {
  showtime: string;
  selectedSeats: string[];
}

const Successful: FC<RouteComponentProps<{}, {}, RouteState>> = ({ location }) => {
  const { selectedMovie } = useContext(SelectedMovieContext);

  return (
    <div className="successful">
      <Backdrop src={selectedMovie.backdrop_path} />

      <div className="wrapper">
        <h1>Enjoy Watching!</h1>
        <h2>Movie</h2>
        <span>{selectedMovie.title}</span>
        <h2>Showtime</h2>
        <span>{location.state.showtime}</span>
        <h2>Chosen Seats</h2>
        <span>{location.state.selectedSeats.join(', ')}</span>
        <Button
          onClick={() => {
            window.location.href = `${process.env.PUBLIC_URL}/`;
          }}
        >
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default Successful;
