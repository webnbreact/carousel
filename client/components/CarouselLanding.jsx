/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';
import url from 'url';

class CarouselLanding extends React.Component {
  constructor() {
    super();
    this.state = {
      image_url: [],
    };
  }


  componentDidMount() {
    const currentEndpoint = window.location.href;
    const dbLocation = 'http://localhost:4500';
    const pathName = url.parse(currentEndpoint).pathname;
    const urlToDatabase = url.resolve(dbLocation, pathName);
    this.getDataFromServer(urlToDatabase)
      .then((data) => {
        this.setState({ image_url: data });
      });
  }

  getDataFromServer(urlToDatabase) {
    return axios.get(urlToDatabase)
      .then(response => (response.data));
  }

  render() {
    const { image_url } = this.state;
    return (
      <div>
        {' '}
        {image_url.map(datum => (
          <div>
            {' '}
            {datum}
            {' '}
          </div>
        ))}
        {' '}
      </div>
    );
  }
}

export default CarouselLanding;
