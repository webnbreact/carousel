import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
// import renderer from 'react-test-renderer';
import { Z_TREES } from 'zlib';
import CarouselCentral from '../client/CarouselCentral';
import CarouselLanding from '../client/components/CarouselLanding';
import CarouselCard from '../client/components/CarouselCard';

Enzyme.configure({ adapter: new Adapter() });

// describe('hey', () => {

// });
describe('Carousel Landing', () => {
  // const tree = mount(<CarouselLanding />);

  it('to render five carousel card components', () => {
    const tree = shallow(<CarouselLanding />);
    tree.setState({
      imageUrls: [
        'http://google.com',
        'http://google.com',
        'http://google.com',
        'http://google.com',
      ],
    });
    expect(tree.find(CarouselCard)).to.have.lengthOf(4);
  });
});

// test('This tests how many nodes are on the screen', () => {
//   const tree = shallow(<CarouselLanding />);
// });
