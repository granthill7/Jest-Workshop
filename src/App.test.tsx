import React from 'react';
import { render, screen } from '@testing-library/react';
import App, { divide } from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('divide function', () => {
  describe('when given two integers', () => {
    it('should return a division result', () => {
      const [a, b, expected] = [10, 2, 5];
      const result = divide(a, b);
      
      expect(result).toEqual(expected);
    });
  })

  describe("when trying to divide by 0", () => {
    it("should throw an error", () => {
      const expectedError = new Error(
        "You can't divide by zero."
      );
      
      expect(() => divide(1, 0)).toThrow(expectedError);
    });
  });

})

