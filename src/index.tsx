import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { setConfig } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './styles/index.scss';
import { SelectedMovieProvider } from './contexts/SelectedMovieContext';
import { TotalContextProvider } from './contexts/TotalContext';

setConfig({
  ignoreSFC: true,
  pureRender: true,
});

const Root: FunctionComponent = () => (
  <SelectedMovieProvider>
    <TotalContextProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </TotalContextProvider>
  </SelectedMovieProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
