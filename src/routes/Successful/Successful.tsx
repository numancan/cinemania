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
        <h1>Successful</h1>
        <h2>
          Movie: <span>{selectedMovie.title}</span>
        </h2>
        <h2>
          Showtime: <span>{location.state.showtime}</span>
        </h2>
        <h2>
          Chosen Seats: <span>{location.state.selectedSeats.join(', ')}</span>
        </h2>
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
