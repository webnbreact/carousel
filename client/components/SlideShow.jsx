import React from 'react';
import { SlideShowFlex } from '../assets/SlideShowAssets';

function SlideShow(props) {
  const { imageUrls, picIndex } = props;
  return (
    <SlideShowFlex>
      <img src={imageUrls[picIndex]} alt="singular-pic" />
    </SlideShowFlex>

  );
}

export default SlideShow;