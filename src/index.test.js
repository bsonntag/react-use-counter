import { act, renderHook } from '@testing-library/react-hooks';
import useCounter from '.';

test('should return zero as the initial state', () => {
  const { result } = renderHook(() => useCounter());
  const [state] = result.current;

  expect(state).toBe(0);
});

test('should return specified initial state', () => {
  const { result } = renderHook(() => useCounter(3));
  const [state] = result.current;

  expect(state).toBe(3);
});

test('should update the state', () => {
  const { result } = renderHook(() => useCounter(0));

  act(() => {
    const [, increment] = result.current;

    increment();
  });

  const [state] = result.current;

  expect(state).toBe(1);
});
