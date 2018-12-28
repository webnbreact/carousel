import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import CarouselCentral from '../client/CarouselCentral';

Enzyme.configure({ adapter: new Adapter() });

// describe('hey', () => {

// });

describe('Carousel Central', () => {
  it('should exist', () => {
    const tree = shallow(<CarouselCentral />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});

// test('This tests how many nodes are on the screen', () => {
//   const tree = shallow(<CarouselLanding />);
// });
