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
      isModal: false,
      imageUrls: [],
      currPicIdx: 1,
    };
    this.handleModalClick = this.handleModalClick.bind(this);
    this.handleGetPictures = this.handleGetPictures.bind(this);
  }

  handleModalClick(e = null, currPicIdx = 0) {
    e.preventDefault();
    const { isModal } = this.state;
    console.log(currPicIdx);
    this.setState({
      isModal: !isModal,
      currPicIdx,
    });
  }

  handleGetPictures(imageUrls) {
    this.setState({
      imageUrls,
    });
  }

  render() {
    const { isModal, imageUrls, currPicIdx } = this.state;

    return (
      <div style={{ width: '90%' }}>
        <CarouselLanding
          currPicIdx={currPicIdx}
          picAmt={imageUrls.length}
          inModal={isModal}
          handleGetPictures={(imageUrls) => { this.handleGetPictures(imageUrls); }}
          handleModalClick={this.handleModalClick}
        />

        {isModal && (
          <Modal
            currPicIdx={currPicIdx}
            picAmt={imageUrls.length}
            inModal={isModal}
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
