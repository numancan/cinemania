import React, { FC, useState, useContext } from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom';

import { SelectedMovieContext } from '../../contexts/SelectedMovieContext';

import ChooseTicketContainer from '../../containers/ChooseTicketContainer';
import ChooseSeatContainer from '../../containers/ChooseSeatContainer';
import MovieDetails from '../../components/MovieDetails';

import './Ticketing.scss';

interface RouteState {
  showtime: string;
}

const Ticketing: FC<RouteComponentProps<{}, {}, RouteState>> = ({ location }) => {
  const [currentTicketingIdx, setCurrentTicketingIdx] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const { selectedMovie } = useContext(SelectedMovieContext);

  const nextState = () => {
    setCurrentTicketingIdx(currentTicketingIdx + 1);
  };

  const ticketingComponents = [
    <ChooseTicketContainer nextState={nextState} />,
    <ChooseSeatContainer
      hallID={selectedMovie.hall_id || 0}
      {...{ selectedSeats, setSelectedSeats, nextState, ...location.state }}
    />,
    <Redirect to={{ pathname: '/successful', state: { ...location.state, selectedSeats } }} />,
  ];

  return (
    <div className="ticketing">
      <MovieDetails selectedMovie={selectedMovie} />

      <div className="ticketing-states wrapper">{ticketingComponents[currentTicketingIdx]}</div>
    </div>
  );
};

export default Ticketing;
