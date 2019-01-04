/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';
import url from 'url';
// import styled from 'styled-components';
// import { BrowserRouter as Brouter, Switch, Route, Link } from 'react-router-dom';
import CarouselCard from './CarouselCard';
import { LandingPhotoGrid, MainLandingPhotoStyled, SideLandingPhotoGrid } from '../assets/StyledAssets';
// const LandingPhotoGrid = styled.div`
//   display: grid;
//   grid-template-columns: auto 40vw 40vw;
//   grid-auto-rows: 50vh;
//   // border: 3px solid purple;
//   width:98vw;
//   margin-right: 1vw;
//   gap: 1px;
// `;

// const MainLandingPhotoStyled = styled.div`
//   display: grid;
//   grid-column: 1/3;
//   gap: 0px;
// `;

// const SideLandingPhotoGrid = styled.div`
//   display: grid;
//   gap: 1px;
//   grid-template-columns: 1fr 1fr;
//   // border:1px solid transparent;
//   overflow:hidden;
//   // border: 5px solid blue;
// `;

class CarouselLanding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrls: [],
      highlightedPicIdx: 0,
    };

    this.handleHover = this.handleHover.bind(this);
  }

  componentDidMount() {
    let { handleGetPictures } = this.props;
    console.log('hello');
    const queryUrl = url.parse(window.location.href).path;
    this.getDataFromServer(queryUrl + 'pictures')
      .then((data) => {
        console.log(data);
        this.setState({ imageUrls: data });
        handleGetPictures(data);
      });
  }

  getDataFromServer(postUrl) {
    return axios.get(postUrl)
      .then(response => (response.data));
  }

  handleHover(e, highlightedPicIdx) {
    this.setState({ highlightedPicIdx: highlightedPicIdx });
  }

  render() {
    const { imageUrls } = this.state;
    const { handleModalClick } = this.props;
    const { highlightedPicIdx } = this.state;
    return (
      <LandingPhotoGrid>
        <MainLandingPhotoStyled>
          <CarouselCard
            inModal
            handleModalClick={handleModalClick}
            handleHover={this.handleHover}
            highlightedPicIdx={highlightedPicIdx}
            currPicIdx={0}
            key={0}
            imageUrl={imageUrls[0]}
          />
        </MainLandingPhotoStyled>
        <SideLandingPhotoGrid>
          {
            imageUrls.map((imageUrl, index) => {
              return (
                <CarouselCard
                  highlightedPicIdx={highlightedPicIdx}
                  handleHover={this.handleHover}
                  inModal
                  currPicIdx={index}
                  handleModalClick={handleModalClick}
                  key={index}
                  imageUrl={imageUrl}
                />
              );
            }).slice(1, 5)
          }
        </SideLandingPhotoGrid>
      </LandingPhotoGrid>
    );
  }
}


export default (CarouselLanding);
