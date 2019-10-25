import React, { FC, useState, useContext } from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import './Ticketing.scss';

import { SelectedMovieContext } from '../../contexts/SelectedMovieContext';

import ChooseTicketContainer from '../../containers/ChooseTicketContainer';
import ChooseSeatContainer from '../../containers/ChooseSeatContainer';
import MovieDetails from '../../components/MovieDetails';

interface RouteState {
  showtime: string;
}

const Ticketing: FC<RouteComponentProps<{}, {}, RouteState>> = ({ location }) => {
  const { state } = location;
  const [currentTicketingIdx, setCurrentTicketingIdx] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const { selectedMovie } = useContext(SelectedMovieContext);

  const nextState = (): void => {
    setCurrentTicketingIdx(currentTicketingIdx + 1);
    document.documentElement.scrollTop = 0;
  };

  const ticketingComponents: JSX.Element[] = [
    <ChooseTicketContainer nextState={nextState} />,
    <ChooseSeatContainer
      hallID={selectedMovie.hall_id || 0}
      {...{ selectedSeats, setSelectedSeats, nextState, ...state }}
    />,
    <Redirect
      to={{
        pathname: '/successful',
        state: { ...state, selectedSeats },
      }}
    />,
  ];

  return (
    <div className="ticketing">
      <div className="movie-detail">
        <MovieDetails selectedMovie={selectedMovie} />
      </div>
      <div className="ticketing-states">{ticketingComponents[currentTicketingIdx]}</div>
    </div>
  );
};

export default Ticketing;
