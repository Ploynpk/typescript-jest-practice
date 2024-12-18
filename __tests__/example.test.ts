import { add } from '../src/components/example';

describe('add function', () => {
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
});
