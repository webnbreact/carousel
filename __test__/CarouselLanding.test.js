import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import CarouselLanding from '../client/components/CarouselLanding';
import CarouselCard from '../client/components/CarouselCard';

Enzyme.configure({ adapter: new Adapter() });

describe('Carousel Landing', () => {
  it('should exist exist', () => {
    const tree = shallow(<CarouselLanding />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it('should render four Carousel Card components', () => {
    const tree = shallow(<CarouselLanding />);
    tree.setState({
      imageUrls: [
        'http://google.com',
        'http://google.com',
        'http://google.com',
        'http://google.com',
      ],
    });
    expect(tree.find(CarouselCard).length).toEqual(4);
  });
});

// test('This tests how many nodes are on the screen', () => {
//   const tree = shallow(<CarouselLanding />);
// });
