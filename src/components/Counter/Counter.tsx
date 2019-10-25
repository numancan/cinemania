import React, { FC } from 'react';
import './Counter.scss';

interface Props {
  count: number;
  decrement: () => void;
  increment: () => void;
}

const Counter: FC<Props> = ({ count, increment, decrement }) => (
  <div className="counter">
    <button onClick={decrement}>-</button>
    <p>{count}</p>
    <button onClick={increment}>+</button>
  </div>
);

export default Counter;
