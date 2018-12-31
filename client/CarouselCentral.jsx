import React, { Component } from 'react';
import { BrowserRouter as Brouter, Switch, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import CarouselLanding from './components/CarouselLanding';

// eslint-disable-next-line react/prefer-stateless-function
class CarouselCentral extends Component {
  // Brouters only allow one child element
  constructor() {
    super();
    this.state = {
      modal: false,
    };
    this.handleModalClick = this.handleModalClick.bind(this);
  }

  handleModalClick() {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
    });
  }

  render() {
    const { modal } = this.state;
    return (
      <div>
        <CarouselLanding handleModalClick={this.handleModalClick} />
        {modal && <Modal handleModalClick={this.handleModalClick} />}
      </div>
    );
  }
}


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

function SlideShow() {
  return (
    <div>SlideShow</div>
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
function Modal({ handleModalClick }) {
  const style = {
    position: 'absolute',
    top: 0, left: 0, bottom: 0, right: 0, height: '5000px', background: "rgba(0, 0, 0, 0.8)"
  };
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
          <SlideShow />
        </SlideShowGrid>
      </ModalStyled>
    </div >
  );
}

function CarouselLauncher() {
  return (
    <Brouter>
      <Route component={CarouselCentral} />
    </Brouter>
  );
}

export default CarouselLauncher;
