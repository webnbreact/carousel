import React from 'react';
import styled from 'styled-components';


const Image = styled.img`
  border: 1px solid black;
  margin: 2px;
  :nth-of-type(n+2) {
    width: 21%;
    height: 21%;
  }
  :first-of-type {
    float: left;
    padding: 0px
  }
`;
const Wrapper = styled.div`
  display: grid;
`;
const CarouselCard = ({ imageUrl, key }) => (
  // <Wrapper className="picture-row">
  <Image className="media-element" src={imageUrl} key={key} alt="pictures" />
  // </Wrapper>
);

export default CarouselCard;
