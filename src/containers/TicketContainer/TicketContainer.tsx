import React, { useState, FC, useContext } from 'react';
import './TicketContainer.scss';

import { TotalContext } from '../../contexts/TotalContext';
import Counter from '../../components/Counter';

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
      <Counter count={count} increment={increment} decrement={decrement} />
    </div>
  );
};

export default TicketContainer;
