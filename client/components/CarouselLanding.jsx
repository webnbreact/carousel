/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';
import url from 'url';
import CarouselCard from './CarouselCard';

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
      <div>
        {imageUrls.map((imageUrl, key) => (
          <CarouselCard key={key} imageUrl={imageUrl} />
        ))}
      </div>
    );
  }
}

export default CarouselLanding;
