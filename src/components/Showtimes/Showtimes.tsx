import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './Showtimes.scss';

interface Props {
  setShowShowtimes: (value: boolean) => void;
}

const showtimes: string[] = ['13:00', '16:00', '19:30'];

const Showtimes: FC<Props> = ({ setShowShowtimes }) => (
  <div className="showtimes">
    {showtimes.map((showtime: string) => (
      <Link
        className="showtime"
        to={{ pathname: '/ticketing', state: { showtime } }}
        key={showtime}
        onClick={() => {
          document.documentElement.scrollTop = 0;
        }}
      >
        {showtime}
      </Link>
    ))}
    <button className="btn-close" onClick={() => setShowShowtimes(false)}>
      x
    </button>
  </div>
);

export default Showtimes;
