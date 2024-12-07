import { add } from '../src/example';

describe('add function', () => {
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
});
