import React from 'react';
import styled, { css } from 'styled-components';

const Image = styled.div`

  border: 3px solid green;
  background: no-repeat url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  min-width: 100%;
  min-height: 100%;
  width: 500px;
  height: 300px;
  ${({ inModal }) => inModal && css`
  : hover {
  color: #424242;
  background-size: cover;
  -webkit-transition: all .3s ease-out;
  -moz-transition: all .3s ease-out;
  -ms-transition: all .3s ease-out;
  -o-transition: all .3s ease-out;
  transition: all .3s ease-out;
  opacity: 1;
  transform: scale(1.3);
  -ms-transform: scale(1.3); /* IE 9 */
  -webkit-transform: scale(1.3); /* Safari and Chrome */
  border: 3px solid blue;

  `}
`;

const OverFlowWrap = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid transparent;
  width: 100 %;
  height: 100 %;
  ${({ inModal }) => !inModal && css`
    border: 3px solid red;
    width:100%;
    height:100%;
  `}
`;

const CarouselCard = (props) => {
  const { inModal, imageUrl, avalue, handleModalClick } = props;
  return (
    <OverFlowWrap inModal={inModal}>
      <Image inModal={inModal} onClick={(e) => { handleModalClick(e, avalue); }} avalue={avalue} imageUrl={imageUrl} key={avalue} alt="pictures" />
    </OverFlowWrap>
  );
};

export default CarouselCard;
