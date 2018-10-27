import { fireEvent, render } from 'react-testing-library';
import React from 'react';
import useCounter from '.';

const Test = ({ initialCount }) => {
  const [count, increment] = useCounter(initialCount);

  return (
    <button onClick={increment}>
      {count}
    </button>
  );
};

test('should return zero as the initial state', () => {
  const { container } = render(<Test />);

  expect(container.firstChild.textContent).toBe('0');
});

test('should return specified initial state', () => {
  const { container } = render(<Test initialCount={3} />);

  expect(container.firstChild.textContent).toBe('3');
});

test('should update the state', () => {
  const { container } = render(<Test />);
  const button = container.firstChild;

  expect(button.textContent).toBe('0');

  fireEvent.click(button);

  expect(button.textContent).toBe('1');
});
