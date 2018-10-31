# react-use-counter

[![CircleCI](https://circleci.com/gh/bsonntag/react-use-counter.svg?style=svg)](https://circleci.com/gh/bsonntag/react-use-counter)
[![Coverage Status](https://coveralls.io/repos/github/bsonntag/react-use-counter/badge.svg?branch=master)](https://coveralls.io/github/bsonntag/react-use-counter?branch=master)

React hook for counter state.

## Disclaimer

This module uses the upcoming [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
which is **subject to change** until released to a final version.

This means that the API of this module is also subject to change.
Please **don't** use it on a production application.

## Installation

Using npm:

```sh
$ npm install --save react-use-counter
```

Using yarn:

```sh
$ yarn add react-use-counter
```

Since this module uses React's upcoming Hooks feature,
to try this out you'll need to install the `16.7.0-alpha.0` version
of `react` and `react-dom`:

```sh
$ yarn add react@16.7.0-alpha.0 react-dom@16.7.0-alpha.0
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

      <button onClick={increment}>
        Click me!
      </button>
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
