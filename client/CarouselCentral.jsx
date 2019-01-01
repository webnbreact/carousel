import React, { Component } from 'react';
import { BrowserRouter as Brouter, Switch, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import CarouselLanding from './components/CarouselLanding';
import getPicturesFromServer from './components/Temp';
import CarouselCard from './components/CarouselCard';
import Modal from './components/Modal'

// eslint-disable-next-line react/prefer-stateless-function
class CarouselCentral extends Component {
  // Brouters only allow one child element
  constructor() {
    super();
    this.state = {
      modal: false,
      imageUrls: [],
      currPicIdx: 1,
    };
    this.handleModalClick = this.handleModalClick.bind(this);
    this.handleGetPictures = this.handleGetPictures.bind(this);
  }

  handleModalClick(e = null, currPicIdx) {
    e.preventDefault();
    const { modal } = this.state;
    console.log(currPicIdx);
    this.setState({
      modal: !modal,
      currPicIdx: currPicIdx
    });
  }

  handleGetPictures(imageUrls) {
    this.setState({
      imageUrls: imageUrls,
    });
  }

  render() {
    const { modal, imageUrls, currPicIdx } = this.state;

    return (
      <div style={{ width: '90%' }}>
        <CarouselLanding currPicIdx={currPicIdx} inModal={modal} handleGetPictures={(imageUrls) => { this.handleGetPictures(imageUrls); }} handleModalClick={this.handleModalClick} />
        {modal && <Modal currPicIdx={currPicIdx} inModal={modal} imageUrls={imageUrls} handleModalClick={this.handleModalClick} />}
      </div>
    );
  }
}


function CarouselLauncher() {
  return (
    <Brouter>
      <Route component={CarouselCentral} />
    </Brouter>
  );
}

export default CarouselLauncher;
