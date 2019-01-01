import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import CarouselCard from './CarouselCard';

const HideOverFlow = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;


const ModalStyled = styled.div`
  position: absolute;
  border: 5px dashed yellow;
  min-width: 960px;
  min-height: 500px;
`;

const SlideShowGrid = styled.div`
  position: relative;
  color: green;
  justify-content: center;
  background-color: white;
  top: ${({ top }) => top}px;
  width: 100%;
`;

const SlideShowFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border: 4px dashed orange;
  padding: 5px;
`;

function SlideShow(props) {
  const { imageUrls } = props;
  return (
    <SlideShowFlex>
      {imageUrls.map((imageUrl, index) => (<CarouselCard key={index} imageUrl={imageUrl} />))}
    </SlideShowFlex>

  );
}
const CloseButtonStyled = styled.div`
top:10px;
position: relative;
  div::before {
    content: ' X';
    border: 1px solid blue;
    font: 40px/100% arial, sans-serif;
    color: gray;

  }
`;
function CloseButton() {
  const style = {
    position: 'absolute',
    borderRadius: '30%',
    minWidth: '25px',
    minHeight: '25px',
    right: '5px',
  };
  return (
    <div style={style} />
  );
}
function Modal({ handleModalClick, imageUrls, index }) {
  const style = {
    position: 'absolute',
    top: 0, left: 0, bottom: 0, right: 0, height: '5000px', background: "rgba(0, 0, 0, 0.8)"
  };
  console.log(imageUrls, 'test');
  const inModal = true;
  return (
    <div onClick={handleModalClick} style={style}>
      <ModalStyled>
        <HideOverFlow />
        <SlideShowGrid top={window.scrollY + (window.innerHeight / 2) - 300}>
          <div style={{ position: 'relative' }}>
            <CloseButtonStyled onClick={handleModalClick}>
              <CloseButton />
            </CloseButtonStyled>
          </div>

          <SlideShowFlex>
            <SlideShow inModal={inModal} imageUrls={imageUrls} />
          </SlideShowFlex>
        </SlideShowGrid>
      </ModalStyled>
    </div>
  );
}

export default Modal;
