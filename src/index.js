import { useState } from 'react';

function useCounter(initialState = 0) {
  const [state, setState] = useState(initialState);
  const increment = () => setState(state + 1);

  return [state, increment];
}

export default useCounter;
