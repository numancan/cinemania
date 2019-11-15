import React, { FC, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import Home from './Home';
import Movie from './Movie';
import Ticketing from './Ticketing';
import Successful from './Successful';

const Routes: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/movies/:id" exact component={Movie} />
      <Route path="/ticketing" exact component={Ticketing} />
      <Route path="/successful" exact component={Successful} />
    </Switch>
  );
};

export default Routes;
