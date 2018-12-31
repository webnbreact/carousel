import React from 'react';
import styled from 'styled-components';

const Image = styled.div`

  border: 1px solid black;
  background: no-repeat url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  min-width: 100%;
  min-height: 100%;
  :hover {
  color: #424242; 
  background-size:cover;
  -webkit-transition: all .3s ease-out;
  -moz-transition: all .3s ease-out;
  -ms-transition: all .3s ease-out;
  -o-transition: all .3s ease-out;
  transition: all .3s ease-out;
  opacity: 1;
  transform: scale(1.3);
  -ms-transform: scale(1.3); /* IE 9 */
  -webkit-transform: scale(1.3); /* Safari and Chrome */
  }  
`;

const Wrap = styled.span`
  position: relative;
  overflow: hidden;
  border: 1px solid transparent;
  
`;
const CarouselCard = (props) => {
  const { imageUrl, key } = props;

  return (
    <Wrap>
      <Image value={key} imageUrl={imageUrl} key={key} alt="pictures" />
    </Wrap>
  );
};

export default CarouselCard;
