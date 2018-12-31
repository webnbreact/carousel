/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';
import url from 'url';
import styled from 'styled-components';
import { BrowserRouter as Brouter, Switch, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import CarouselCard from './CarouselCard';

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
  constructor(props) {
    super(props);
    this.state = {
      imageUrls: [],
    };
  }

  componentDidMount() {
    let { location, match, history } = this.props;
    
    const dbLocation = 'http://localhost:4500';
    const postUrl = url.resolve(dbLocation, location.pathname);
    

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
    const { handleModalClick } = this.props;
    return (
      <LandingPhotoGrid>
        <MainLandingPhotoStyled>
          <CarouselCard handleModalClick={handleModalClick} imageUrl={imageUrls[0]} />
        </MainLandingPhotoStyled>
        <SideLandingPhotoGrid>
          {
            imageUrls.map((imageUrl, idx) => {
              return (
                <CarouselCard handleModalClick={handleModalClick} key={idx} imageUrl={imageUrl} />
              );
            }).slice(1)
          }
        </SideLandingPhotoGrid>
      </LandingPhotoGrid>
    );
  }
}


export default withRouter(CarouselLanding);
