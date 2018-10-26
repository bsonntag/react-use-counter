# react-use-counter

React hook for counter state.

## Usage

```js
import React from 'react';
import useCounter from 'react-use-counter';

function Example() {
  const [count, increment] = useCounter(0);

  return (
    <div>
      You clicked {{count}} times.

      <button onClick={increment}>
        Click me!
      </button>
    </div>
  );
}
```

## Contributing

Please feel free to submit any issues or pull requests.

## License

MIT
