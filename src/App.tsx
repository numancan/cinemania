import React, { FC, Fragment } from 'react';
import { hot } from 'react-hot-loader/root';
import Routes from './routes';

import './App.scss';

import Header from './components/Header';

const App: FC = () => {
  return (
    <Fragment>
      <Header />
      <Routes />
    </Fragment>
  );
};

export default hot(App);
