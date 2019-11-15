import React, { SFC } from 'react';

import './CastCard.scss';

const baseUrl = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';

const CastCard: SFC<{ cast: Cast }> = ({ cast }) => (
  <div className="cast">
    <img className="cast-profil" src={baseUrl + cast.profile_path} alt="profil" />
    <span className="cast-name">{cast.name}</span>
    <span className="cast-character">{cast.character}</span>
  </div>
);

export default CastCard;
