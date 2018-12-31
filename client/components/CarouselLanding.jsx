/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';
import url from 'url';
// import { Grid } from '../css/CarouselLanding';
import styled from 'styled-components';
import CarouselCard from './CarouselCard';

// const Wrapper = styled.div`

//   img:first-of-type {
//     max-width: 40%;
//     max-height: 40%;
//     overflow:hidden;
//   }
//   img:nth-of-type(n+2) {

//     margin: 1px;

//     max-height: 150px;
//     max-width: 150px;
//     overflow: hidden;
//   }

// `;
const LandingPhotoGrid = styled.div`
  display: grid;
  grid-template-columns: auto 350px 350px;
  grid-auto-rows: 350px
  gap: 0px;
  column-gap: 0px;
  margin-left: 10%;
  margin-right: 10%;
`;

const MainLandingPhotoStyled = styled.div`
  display: grid;
  grid-column: 1/3;
  gap: 0px;
`;

const SideLandingPhotoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border:1px solid transparent;
  overflow:hidden;
`;

class CarouselLanding extends React.Component {
  constructor() {
    super();
    this.state = {
      imageUrls: [],
    };
  }


  componentDidMount() {
    const currentUrl = window.location.pathname;
    const dbLocation = 'http://localhost:4500';
    const postUrl = url.resolve(dbLocation, currentUrl);
    this.getDataFromServer(postUrl)
      .then((data) => {
        this.setState({ imageUrls: data });
      });
  }

  getDataFromServer(postUrl) {
    return axios.get(postUrl)
      .then(response => (response.data));
  }

  render() {
    const { imageUrls } = this.state;

    return (
      <LandingPhotoGrid>
        <MainLandingPhotoStyled>
          <CarouselCard imageUrl={imageUrls[0]} />
        </MainLandingPhotoStyled>
        <SideLandingPhotoGrid>
          {
            imageUrls.map((imageUrl, key) => (
              <CarouselCard key={key} imageUrl={imageUrl} />
            )).slice(1)
          }
        </SideLandingPhotoGrid>
      </LandingPhotoGrid>

    );
  }
}

export default CarouselLanding;
