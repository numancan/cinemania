import React, { FC, useContext, useState, MouseEvent, useEffect } from 'react';

import { TotalContext } from '../../contexts/TotalContext';
import { fetchSoldSeats } from '../../services/movieService';

import Loading from '../../components/Loading';
import Button from '../../components/Button';
import Hall from '../../components/Hall';

import './ChooseSeatContainer.scss';

const hallTemplate: string[][] = [
  ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11', 'A12'],
  ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12'],
  ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10'],
  ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10'],
  ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10'],
  ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10'],
  ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10'],
  ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'H11', 'H12'],
];

interface Props {
  showtime: string;
  hallID: number;
  nextState: () => void;
  setSelectedSeats: (value: string[]) => void;
  selectedSeats: string[];
}

const ChooseSeatContainer: FC<Props> = props => {
  const { hallID, showtime, nextState, selectedSeats, setSelectedSeats } = props;
  const [soldSeats, setSoldSeats] = useState<string[]>([]);

  const { totalTicketCount } = useContext(TotalContext).state;

  useEffect(() => {
    fetchSoldSeats(hallID, showtime).then(res => setSoldSeats(res));
  }, [hallID, showtime]);

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    const seatElement: HTMLButtonElement = event.currentTarget;
    const seatID: string = seatElement.value;

    const removeSelectedSeat = () => {
      const seatIndex: number = selectedSeats.indexOf(seatID);

      selectedSeats.splice(seatIndex, 1);
      setSelectedSeats(selectedSeats);
      seatElement.classList.remove('selected');
    };

    const selectSeat = () => {
      seatElement.classList.add('selected');
      setSelectedSeats([...selectedSeats, seatID]);
    };

    if (soldSeats.includes(seatID)) return;

    if (selectedSeats.includes(seatID)) removeSelectedSeat();
    else if (totalTicketCount !== selectedSeats.length) selectSeat();
  };

  if (!soldSeats.length) return <Loading />;
  return (
    <div className="choose-seat">
      <h1 className="section-title">Choose your seat</h1>
      <div className="seats-container">
        {<Hall hallTemplate={hallTemplate} onClick={handleClick} soldSeats={soldSeats} />}
        <div className="scene">SCENE</div>
      </div>

      <Button onClick={() => selectedSeats.length === totalTicketCount && nextState()}>
        Continue
      </Button>
    </div>
  );
};

export default ChooseSeatContainer;
