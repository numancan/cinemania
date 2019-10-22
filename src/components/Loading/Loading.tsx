import React, { SFC } from 'react';
import './Loading.scss';

const Loading: SFC = () => (
  <div className="loading">
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);
export default Loading;
