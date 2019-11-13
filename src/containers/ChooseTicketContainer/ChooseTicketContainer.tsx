import React, { FC, useContext, useState, useEffect, Fragment } from 'react';

import { fetchTicketPrices } from '../../services/movieService';
import { TotalContext } from '../../contexts/TotalContext';

import TicketContainer from '../TicketContainer';
import Loading from '../../components/Loading';
import Button from '../../components/Button';

import './ChooseTicketContainer.scss';

const ChooseTicketContainer: FC<{ nextState: () => void }> = ({ nextState }) => {
  const { state, dispatch } = useContext(TotalContext);
  const { totalPrice, totalTicketCount } = state;

  const [ticketPrices, setTicketPrices] = useState<TicketPrice[]>();

  useEffect(() => {
    fetchTicketPrices().then(res => setTicketPrices(res));
    dispatch({ type: 'reset', payload: { price: 0 } });
  }, [dispatch]);

  const renderTicketContainers = () =>
    ticketPrices &&
    ticketPrices.map((ticketPrice: TicketPrice) => (
      <TicketContainer key={ticketPrice.type} {...ticketPrice} />
    ));

  if (!ticketPrices) return <Loading />;
  return (
    <Fragment>
      <h1 className="section-title">Choose your ticket</h1>
      {renderTicketContainers()}

      <div className="choose-ticket-bottom">
        <h4>Total Price: {totalPrice} TL</h4>
        <Button onClick={() => totalTicketCount > 0 && nextState()}>Continue</Button>
      </div>
    </Fragment>
  );
};

export default ChooseTicketContainer;
