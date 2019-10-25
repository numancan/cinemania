import React, { FC } from 'react';
import './Button.scss';

interface Props {
  onClick?: () => void;
  value: string;
}

const Button: FC<Props> = ({ onClick, value }) => (
  <button className="button" onClick={onClick}>
    {value}
  </button>
);

export default Button;
