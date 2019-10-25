import React, { SFC } from 'react';
import './Loading.scss';

const Loading: SFC = () => (
  <section className="loading">
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </section>
);

export default Loading;
