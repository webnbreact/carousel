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
      highlightedPicIdx: 1,
    };
    this.handleModalClick = this.handleModalClick.bind(this);
    this.handleGetPictures = this.handleGetPictures.bind(this);
  }

  handleModalClick(e = null, highlightedPicIdx = 0) {
    e.preventDefault();
    const { isModal } = this.state;
    console.log(highlightedPicIdx);
    this.setState({
      isModal: !isModal,
      highlightedPicIdx,
    });
  }

  handleGetPictures(imageUrls) {
    this.setState({
      imageUrls: imageUrls,
    });
  }

  render() {
    const { isModal, imageUrls, highlightedPicIdx } = this.state;

    return (
      <div style={{ width: '90%' }}>
        <CarouselLanding
          highlightedPicIdx={highlightedPicIdx}
          picAmt={imageUrls.length}
          inModal={isModal}
          handleGetPictures={(imageUrls) => { this.handleGetPictures(imageUrls); }}
          handleModalClick={this.handleModalClick}
        />

        {isModal && (
          <Modal
            highlightedPicIdx={highlightedPicIdx}
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

export default CarouselCentral;
