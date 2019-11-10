import React, { SFC, useRef, useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import MovieCard from '../MovieCard';
import Backdrop from '../Backdrop';

import './Carousel.scss';

interface Props {
  movies: Movie[];
}

// TODO: Add touch movement
const Carousel: SFC<Props> = ({ movies }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [sliderPosX, setSliderPosX] = useState(-100);

  const moveLeft = () => {
    if (sliderPosX <= -100) setSliderPosX(sliderPosX + 200);
  };

  const moveRight = () => {
    const sliderWidth = (sliderRef && sliderRef.current && sliderRef.current.clientWidth) || 9999;
    const maxSlideWidth = -(sliderWidth - window.innerWidth);
    if (maxSlideWidth < sliderPosX) setSliderPosX(sliderPosX - 200);
  };

  const renderMovieCards = () => movies.map(movie => <MovieCard key={movie.id} movie={movie} />);

  return (
    <div className="carousel">
      <FontAwesomeIcon onClick={moveLeft} className="arrowLeft" icon={faCaretLeft} size="5x" />
      <div className="wrapper carousel-inner">
        <div
          className="slider"
          ref={sliderRef}
          style={{ transform: `translateX(${sliderPosX}px)` }}
        >
          {renderMovieCards()}
        </div>
      </div>
      <FontAwesomeIcon onClick={moveRight} icon={faCaretRight} size="5x" />
      <Backdrop src="/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg" classNames="blur-light no-stretch-height" />
    </div>
  );
};

export default Carousel;
