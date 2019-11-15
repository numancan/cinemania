import React, { SFC, Fragment } from 'react';
import './Backdrop.scss';

interface Props {
  src?: string;
  classNames?: string;
}

const Backdrop: SFC<Props> = React.memo(({ src = '', classNames = '' }) => (
  <Fragment>
    <img
      className={`backdrop ${classNames}`}
      src={`https://image.tmdb.org/t/p/original${src}`}
      alt="backdrop"
    />
    <div className="backdrop-overlay" />
  </Fragment>
));

export default Backdrop;
