import React, { FC, useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import './Carousel.scss';

// TODO: Add touch movement
const Carousel: FC = React.memo(({ children }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [sliderPosX, setSliderPosX] = useState(-100);

  const moveLeft = () => {
    if (sliderPosX <= -100) setSliderPosX(sliderPosX + 200);
  };

  const moveRight = () => {
    const sliderWidth = (sliderRef && sliderRef.current && sliderRef.current.clientWidth) || 0;
    const wrapperWidth = window.innerWidth > 1440 ? 1440 : window.innerWidth;
    const maxSlideWidth = -(sliderWidth - wrapperWidth);

    if (maxSlideWidth < sliderPosX) setSliderPosX(sliderPosX - 200);
  };

  return (
    <div className="carousel">
      <FontAwesomeIcon onClick={moveLeft} className="arrowLeft" icon={faCaretLeft} size="5x" />
      <div className="wrapper carousel-inner">
        <div
          className="slider"
          ref={sliderRef}
          style={{ transform: `translateX(${sliderPosX}px)` }}
        >
          {children}
        </div>
      </div>
      <FontAwesomeIcon onClick={moveRight} icon={faCaretRight} size="5x" />
    </div>
  );
});

export default Carousel;
