import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';

const Header: FC = () => {
  const { location, goBack } = useHistory();

  return (
    <div className="header">
      <div className="wrapper content">
        {location.pathname === '/' ? (
          <h1 className="website-name">CINEMANIA</h1>
        ) : (
          <FontAwesomeIcon onClick={goBack} icon={faChevronLeft} size="3x" />
        )}

        <FontAwesomeIcon
          onClick={() => {
            window.location.href = 'https://www.github.com/numancan/cinemania';
          }}
          icon={faGithub}
          size="3x"
        />
      </div>
    </div>
  );
};

export default Header;
