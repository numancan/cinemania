import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header: FC = () => (
  <Link to="/">
    <h1 className="header">CINEMANIA</h1>
  </Link>
);

export default Header;
