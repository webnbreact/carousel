import React from 'react';
import { BrowserRouter as Brouter, Switch, Route } from 'react-router-dom';
import CarouselLanding from './components/CarouselLanding';

const CarouselCentral = () => {
  return (
    <Brouter>
      <div>
        <Route exact path="/" component={Redirect} />
        <Route path="/rooms/:id/pictures" component={CarouselLanding} />
      </div>
    </Brouter>
  );
};

function Redirect() {
  return (
    <div> redirect or 404? </div>
  );
}

export default CarouselCentral;
