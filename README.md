# react-use-counter

[![CircleCI](https://circleci.com/gh/bsonntag/react-use-counter.svg?style=svg)](https://circleci.com/gh/bsonntag/react-use-counter)
[![Coverage Status](https://coveralls.io/repos/github/bsonntag/react-use-counter/badge.svg?branch=master)](https://coveralls.io/github/bsonntag/react-use-counter?branch=master)

React hook for counter state.

## Installation

Using npm:

```sh
$ npm install --save react-use-counter
```

Using yarn:

```sh
$ yarn add react-use-counter
```

Since this module uses React Hooks you'll need to install
at least the `16.8.0` version of `react` and `react-dom`:

```sh
$ yarn add react@^16.8.0 react-dom@^16.8.0
```

## Usage

```js
import React from 'react';
import useCounter from 'react-use-counter';

function Example() {
  const [count, increment] = useCounter(0);

  return (
    <div>
      You clicked {{count}} times.

      <button onClick={increment}>Click me!</button>
    </div>
  );
}
```

## API

```js
useCounter(initialCount?: number): [number, () => void]
```

Receives an optional initial count and returns a tuple with the current count
and a function to increment the counter.

## Contributing

Please feel free to submit any issues or pull requests.

## License

MIT
