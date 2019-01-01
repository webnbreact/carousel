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
  min-width: 90%;
  min-height: 90%;
  width: 96vw;
  margin-left: 2vw;
  margin-right: 2vw;
`;

const SlideShowGrid = styled.div`
  position: relative;
  color: green;
  background-color: white;
  top: ${({ top }) => top}px;
  width: auto;
  margin-left: 10vw;
  margin-right: 10vh;
  margin-top: 4vh;
  margin-bottom: 7vh;
  height: auto;
  border: 4px double violet;
`;

const SlideShowFlex = styled.div`
  border: 4px dashed orange;
  display: flex;
  flex-direction: row;
  height: 70vh;
  
  
`;

function SlideShow(props) {
  const { imageUrls, picIndex } = props;
  return (
    <SlideShowFlex>
      <img src={imageUrls[picIndex % imageUrls.length]} alt="somehing" />
    </SlideShowFlex>

  );
}
const CloseButtonStyled = styled.div`
top:10px;
right: 5px;
height: 100%;
position: absolute;
&::before {
  content: ' X';
  border: 1px solid blue;
  font: 40px/100% arial, sans-serif;
  color: gray;
  z-index: 5
}
border: 1px solid brown;
`;

const GoRightStyled = styled.div`
  height: 100%;
  top: ${({ top }) => top}px;
  margin-left:3vw;
  position: absolute;
  right: 5px;
  min-height: 100%;
  font-size: 100px;
  min-width: 3vw;
  min-height: 100%;
  &::before{
    content: '>'
  }
`;
const GoLeftStyled = styled.div`
  position: absolute;
  top: ${({ top }) => top}px;
  height: 100%;
  left: 5px;
  font-size: 100px;
  min-width: 3vw;
  margin-right: 3vw;

  &::before{
    content: '<';

  }
`;
const SlideShowStyled = styled.div`
  height: auto;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  margin-top: 0vh;
  margin-bottom: 0vh;
  border: 8px dotted lightblue;
  position: relative;
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }

  incrementNum() {
    const { num } = this.state;
    this.setState({ num: num + 1 });
  }

  render() {
    const style = {
      position: 'absolute',
      top: 0, left: 0, bottom: 0, right: 0, height: '5000px', background: "rgba(0, 0, 0, 0.8)"
    };

    const { inModal, handleModalClick, imageUrls, currPicIdx, picAmt } = this.props;
    let newIndex = (currPicIdx + this.state.num) % picAmt;
    return (

      <div style={style}>
        <HideOverFlow />

        <ModalStyled>
          <SlideShowGrid top={window.scrollY + (window.innerHeight / 2) - 370}>
            <CloseButtonStyled onClick={handleModalClick} />
            <SlideShowFlex>
              <GoLeftStyled top={window.scrollY + (window.innerHeight / 2) - 200} />
              <SlideShowStyled right={window.innerWidth / 2}>
                <SlideShow inModal={inModal} imageUrls={imageUrls} picIndex={newIndex} />
              </SlideShowStyled>

              <GoRightStyled onClick={() => { this.incrementNum() }} top={window.scrollY + (window.innerHeight / 2) - 200} />

            </SlideShowFlex>

          </SlideShowGrid>
        </ModalStyled>
      </div>
    );
  }
}


export default Modal;
