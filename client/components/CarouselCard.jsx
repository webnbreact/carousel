import React from 'react';

const CarouselCard = ({ imageUrl, key }) => (
  <img src={imageUrl} key={key} alt="pictures" />
);

export default CarouselCard;
