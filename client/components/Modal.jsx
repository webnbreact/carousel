import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const HideOverFlow = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const ModalStyled = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
`;

const SlideShowGrid = styled.div`
  position: relative;
  color: green;
  justify-content: center;
  background-color: white;
  top: ${({ top }) => top}px;
  height: 305px;
`;

const SlideShowFlex = styled.div`
  display: flex;
`;

function SlideShow(props) {
  const { imageUrls } = props;
  return (
    <div>
      {imageUrls.map((imageUrl, index) => (<CarouselCard key={index} imageUrl={imageUrl} />))}

    </div>
  );
}
const TryStyled = styled.div`
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
            <TryStyled>

              <CloseButton onClick={handleModalClick} />
            </TryStyled>
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