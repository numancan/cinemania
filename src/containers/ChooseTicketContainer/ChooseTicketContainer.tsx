import React, { FC, useContext, useState, useEffect, Fragment } from 'react';
import './ChooseTicketContainer.scss';

import { fetchTicketPrices } from '../../services/movieService';
import { TotalContext } from '../../contexts/TotalContext';

import TicketContainer from '../TicketContainer';
import Loading from '../../components/Loading';
import Button from '../../components/Button';

const ChooseTicketContainer: FC<{ nextState: () => void }> = ({ nextState }) => {
  const {
    state: { totalPrice, totalTicketCount },
    dispatch,
  } = useContext(TotalContext);

  const [ticketPrices, setTicketPrices] = useState<TicketPrice[]>();

  useEffect(() => {
    fetchTicketPrices().then(res => setTicketPrices(res));
    dispatch({ type: 'reset', payload: { price: 0 } });
  }, [dispatch]);

  if (!ticketPrices) return <Loading />;
  return (
    <Fragment>
      <h1 className="section-title">Choose your ticket</h1>
      {ticketPrices.map((ticketPrice: TicketPrice) => (
        <TicketContainer key={ticketPrice.type} {...ticketPrice} />
      ))}
      <h4>Total Price: {totalPrice} TL</h4>
      <Button onClick={() => totalTicketCount > 0 && nextState()} value="Continue" />
    </Fragment>
  );
};

export default ChooseTicketContainer;
