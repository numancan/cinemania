import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './Showtimes.scss';

interface Props {
  setShowShowtimes?: (state: boolean) => void;
}

const showtimes = ['13:00', '16:00', '19:30'];

const Showtimes: FC<Props> = ({ setShowShowtimes }) => (
  <div className="showtimes">
    {showtimes.map((showtime: string) => (
      <Link
        className="showtime"
        to={{ pathname: '/ticketing', state: { showtime } }}
        key={showtime}
      >
        {showtime}
      </Link>
    ))}

    {/* TODO: use FontAweseome */}
    <button className="btn-close">x</button>
  </div>
);

export default Showtimes;
