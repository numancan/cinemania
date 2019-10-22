import React, { FC, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './Successful.scss';

import { SelectedMovieContext } from '../../contexts/SelectedMovieContext';
import Button from '../../components/Button';
import Backdrop from '../../components/Backdrop';

interface RouteState {
  showtime: string;
  selectedSeats: string[];
}

const Successful: FC<RouteComponentProps<{}, {}, RouteState>> = ({ location }) => {
  const { selectedMovie } = useContext(SelectedMovieContext);

  return (
    <div className="successful">
      <Backdrop src={selectedMovie.backdrop_path} />
      <h1>Successful</h1>
      <h2>
        Movie: <span>{selectedMovie.title}</span>
      </h2>
      <h2>
        Showtime: <span>{location.state.showtime}</span>
      </h2>
      <h2>
        Chosen Seats: <span>{location.state.selectedSeats.toString()}</span>
      </h2>
      <Button
        onClick={() => {
          window.location.href = '/';
        }}
        value="Go Home"
      />
    </div>
  );
};
export default Successful;
