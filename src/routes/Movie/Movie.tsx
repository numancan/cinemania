import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import MovieDetailsContainer from '../../containers/MovieDetailsContainer';

const Movie: FC<RouteComponentProps<{ id: string }>> = ({ match }) => (
  <MovieDetailsContainer id={match.params.id} />
);

export default Movie;
