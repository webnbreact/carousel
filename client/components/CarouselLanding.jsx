/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';
import url from 'url';

class CarouselLanding extends React.Component {
  constructor() {
    super();
    this.state = {
      imageUrls: [],
    };
  }


  componentDidMount() {
    const currentUrl = window.location.href;
    const dbLocation = 'http://localhost:4500';
    const pathName = url.parse(currentUrl).pathname;
    const postUrl = url.resolve(dbLocation, pathName);
    this.getDataFromServer(postUrl)
      .then((data) => {
        this.setState({ imageUrls: data });
      });
  }

  getDataFromServer(postUrl) {
    return axios.get(postUrl)
      .then(response => (response.data));
  }

  handleImageLoad(event) {

  }

  render() {
    const { imageUrls } = this.state;
    return (
      <div>
        {' '}
        {imageUrls.map(datum => (
          <div>
            {' '}
            <img className="lazyload" onLoad={this.handleImageLoad} src={`${datum}/food`} alt="pictures" />
            {' '}
          </div>
        ))}
        {' '}
      </div>
    );
  }
}

export default CarouselLanding;
