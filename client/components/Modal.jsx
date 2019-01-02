import React from 'react';

import { RightArrowSVG, CloseButtonSVG, CloseButtonStyled, GoLeftStyled, GoRightStyled } from '../assets/ModalAssets';
import { ModalStyled, HideOverFlow } from '../assets/ModalAssets';

import { SlideShowFlex, SlideShowGrid, SlideShowStyled } from '../assets/SlideShowAssets';

import SlideShow from './SlideShow';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
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

    const { inModal, handleModalClick, imageUrls, highlightedPicIdx, picAmt } = this.props;
    let newIndex = Math.abs((highlightedPicIdx + this.state.num) % picAmt);
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
