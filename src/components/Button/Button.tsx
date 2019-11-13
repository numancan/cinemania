import React, { FC } from 'react';

import './Button.scss';

interface Props {
  onClick?: () => void;
  value?: string;
  secondary?: boolean;
}

// TODO: maybe, using classnames is better
const Button: FC<Props> = ({ onClick, children, secondary }) => (
  <button className={`button ${(secondary && 'secondary') || ''}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;
