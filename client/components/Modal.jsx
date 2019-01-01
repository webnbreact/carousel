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
  background-color: rgb(72, 72, 72);
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
      <img src={imageUrls[picIndex]} alt="somehing" />
    </SlideShowFlex>

  );
}
const CloseButtonStyled = styled.div`
top:10px;
right: 5px;
height: 100%;
position: absolute;
`;

const GoRightStyled = styled.div`
  font-size: .5em;
  top: ${({ top }) => top}px;
  margin-left:3vw;
  border: 2px solid brown;
  position: absolute;
  right: 5px;
`;
const GoLeftStyled = styled.div`
  font-size: .5em;
  position: absolute;
  top: ${({ top }) => top}px;
  left: 5px;
  min-width: 3vw;
  margin-right: 3vw;
  transform: rotate(180deg);
 
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

const RightArrowSVG = () => (
  <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: "4.8em", width: "4.8em", fill: "rgb(255, 255, 255)" }}><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd" /></svg>
);

const CloseButtonSVG = () => (
  <svg viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false" style={{ height: "2em", width: "2em", display: "block", fill: "rgb(255, 255, 255)" }}><path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd" /></svg>
);

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
    this.incrementNum = this.incrementNum.bind(this);
  }

  incrementNum() {
    const { num } = this.state;
    console.log(num);
    this.setState({ num: num + 1 });
  }

  decrementNum(picAmt) {
    const { num } = this.state;
    let decIdx = num - 1;
    if (num < 0) {
      decIdx = picAmt + num;
    }
    console.log(decIdx, 'this is the decremented');
    this.setState({ num: decIdx });
  }

  render() {
    const style = {
      position: 'absolute',
      top: 0, left: 0, bottom: 0, right: 0, height: '5000px', background: "rgba(0, 0, 0, 0.8)"
    };

    const { inModal, handleModalClick, imageUrls, currPicIdx, picAmt } = this.props;
    let newIndex = Math.abs((currPicIdx + this.state.num) % picAmt);
    const valignArrow = window.scrollY + (window.innerHeight / 2) - 200;

    return (

      <div style={style}>
        <HideOverFlow />

        <ModalStyled>
          <SlideShowGrid top={window.scrollY + (window.innerHeight / 2) - 370}>
            <CloseButtonStyled onClick={handleModalClick}>
              <CloseButtonSVG />
            </CloseButtonStyled>
            <SlideShowFlex>
              <GoLeftStyled top={valignArrow} onClick={() => { this.decrementNum(picAmt) }}>
                <RightArrowSVG />
              </GoLeftStyled>
              <SlideShowStyled right={window.innerWidth / 2}>
                <SlideShow inModal={inModal} imageUrls={imageUrls} picIndex={newIndex} />
              </SlideShowStyled>
              <GoRightStyled onClick={() => { this.incrementNum() }} top={valignArrow}>
                <RightArrowSVG />
              </GoRightStyled>

            </SlideShowFlex>

          </SlideShowGrid>
        </ModalStyled>
      </div >
    );
  }
}

// remember to do this if there are namespace issues
// babel-plugin-styled-components-css-namespace
export default Modal;
