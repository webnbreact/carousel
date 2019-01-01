import React, { Component } from 'react';
import { BrowserRouter as Brouter, Route } from 'react-router-dom';
import CarouselLanding from './components/CarouselLanding';
import Modal from './components/Modal';

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

  handleModalClick(e = null, currPicIdx = 0) {
    e.preventDefault();
    const { modal } = this.state;
    console.log(currPicIdx);
    this.setState({
      modal: !modal,
      currPicIdx,
    });
  }

  handleGetPictures(imageUrls) {
    this.setState({
      imageUrls,
    });
  }

  render() {
    const { modal, imageUrls, currPicIdx } = this.state;

    return (
      <div style={{ width: '90%' }}>
        <CarouselLanding
          currPicIdx={currPicIdx}
          picAmt={imageUrls.length}
          inModal={modal}
          handleGetPictures={(imageUrls) => { this.handleGetPictures(imageUrls); }}
          handleModalClick={this.handleModalClick} />

        {modal && (
          <Modal
            currPicIdx={currPicIdx}
            picAmt={imageUrls.length}
            inModal={modal}
            imageUrls={imageUrls}
            handleModalClick={this.handleModalClick}
          />
        )
        }
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
