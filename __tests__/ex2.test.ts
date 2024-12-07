import { testTs } from '../src/ex2';

describe('testTs function', () => {
  // apply to all
  test('should multiply all element in the array by the given number', () => {
    const arr = [1, 2];
    const givenNum = 2;
    const expected = [2, 4];
    expect(testTs(arr, givenNum)).toEqual(expected);
  });

  // if not argument // return empty array

  // if given num is 0 // return array of 0

  // handle a negative numbers
});
