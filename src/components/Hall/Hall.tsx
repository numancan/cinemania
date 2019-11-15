import React, { SFC, Fragment } from 'react';

import './Hall.scss';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  hallTemplate: string[][];
  soldSeats: string[];
}

const Hall: SFC<Props> = React.memo(({ hallTemplate, onClick, soldSeats }) => (
  <Fragment>
    {hallTemplate.map((seats: string[], idx: number) => (
      <div className="row" key={seats[idx].charAt(0)}>
        {seats.map((seat: string) => (
          <button
            className={soldSeats.includes(seat) ? 'seat sold' : 'seat'}
            onClick={onClick}
            value={seat}
            key={seat}
          >
            {seat}
          </button>
        ))}
      </div>
    ))}
  </Fragment>
));

export default Hall;
