import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('incrementNum', () => {
  function incrementNum(picAmt, startingState) {
    return (startingState % picAmt);
  }

  it('should cycle through 1 through 5 despite counter being high.', () => {
    let startingState = 5;
    const numOfPics = 10;
    const nums = [];
    // it should go 5 6 7 8 9 0 1 when i loop 7 times
    for (let i = 0; i < 7; i += 1) {
      nums.push(incrementNum(numOfPics, startingState));
      startingState++;
    }
    expect(nums).toEqual([5, 6, 7, 8, 9, 0, 1]);
  });
  it('should cycle through 1 through 5 despite counter being high.', () => {
    let startingState = 5;
    const numOfPics = 10;
    const nums = [];
    // it should go 5 6 7 8 9 0 1 when i loop 7 times
    for (let i = 0; i < 10; i += 1) {
      nums.push(incrementNum(numOfPics, startingState));
      startingState++;
    }
    expect(nums).toEqual([5, 6, 7, 8, 9, 0, 1, 2, 3, 4]);
  });
});

describe('decrementNum', () => {
  function decrementNum(picAmt, startingState) {
    let inspect = startingState % picAmt;
    if (inspect < 0) {
      inspect += picAmt;
    }
    startingState -= 1;
    return inspect;
  }
  // this should go 5 4 3 2 1;
  it('should loop through the same numbers even when decrementing', () => {
    let startingState = 5;
    const numOfPics = 10;
    const nums = [];
    for (let i = 0; i < 8; i += 1) {
      nums.push(decrementNum(numOfPics, startingState));
      startingState -= 1;
    }
    expect(nums).toEqual([5, 4, 3, 2, 1, 0, 9, 8]);
  });
});
