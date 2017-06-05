redux-saga-interval
====

Add ‘effect’ to execute ‘fork’  in ‘redux-saga’  arbitrary interval.

# Getting started

## Install

```
$ npm install --save redux-saga-interval
```

or

```
$ yarn add redux-saga-interval
```

## Usage Example

sagas.js

```
import interval from 'redux-saga-interval';

export default function* rootSaga() {
  const task = yield interval(100, fn);

  // When task stop
  task.cancel();
}
```

# API Reference

## interval(ms, fn, ...args)

Execute fn at intervals.

### Arguments

- `ms: Number` - Interval for periodically executing fn

- `fn: Function` - A Generator function, or normal function which returns a Promise as result

- `args: Array<any>` - An array of values to be passed as arguments to `fn`

### return

[redux-saga Interfaces Task](https://github.com/redux-saga/redux-saga/tree/master/docs/api#task)
