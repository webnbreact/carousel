/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import React from 'react';

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      image_url: [],
    };
  }

  render() {
    return (
      <div> Component is rendering! </div>
    );
  }
}

export default Landing;
