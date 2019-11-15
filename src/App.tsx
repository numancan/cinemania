import React, { FC, Fragment } from 'react';
import { hot } from 'react-hot-loader/root';
import Routes from './routes';

import Header from './components/Header';

import './App.scss';

const App: FC = () => {
  return (
    <Fragment>
      <Header />
      <Routes />
    </Fragment>
  );
};

export default hot(App);
