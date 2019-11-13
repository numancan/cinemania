import React, { useState, FC, useContext } from 'react';

import { TotalContext } from '../../contexts/TotalContext';
import Button from '../../components/Button';

import './TicketContainer.scss';

interface Props {
  price: number;
  type: string;
}

const TicketContainer: FC<Props> = ({ price, type }) => {
  const [count, setCount] = useState(0);
  const { dispatch } = useContext(TotalContext);

  const increment = (): void => {
    setCount(count + 1);
    dispatch({ type: 'add', payload: { price } });
  };

  const decrement = (): void => {
    if (!count) return;
    setCount(count - 1);
    dispatch({ type: 'remove', payload: { price } });
  };

  return (
    <div className="ticket">
      <h4>{type}</h4>
      <p className="price">{price} TL</p>
      <div className="counter">
        <Button onClick={decrement}>-</Button>
        <p>{count}</p>
        <Button onClick={increment}>+</Button>
      </div>
    </div>
  );
};

export default TicketContainer;
