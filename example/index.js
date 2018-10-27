import { render } from 'react-dom';
import React from 'react';
import useCounter from '../src';

const Example = () => {
  const [count, increment] = useCounter();

  return (
    <>
      {'You clicked '}
      {count}
      {' times'}

      <button onClick={increment}>
        {'Click me!'}
      </button>
    </>
  );
};

render(<Example />, document.getElementById('root'));
