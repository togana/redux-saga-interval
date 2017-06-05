import test from 'ava';
import { delay } from 'redux-saga';
import { call, fork, spawn } from 'redux-saga/effects';
import interval, { handlerInterval } from './interval';

const testFn = () => {};

test('defined interval', t => t.not(interval, undefined));
test('defined handlerInterval', t => t.not(handlerInterval, undefined));

test('init interval effects', (t) => {
  const generator = interval(30, testFn);
  const next = generator.next();
  t.deepEqual(next.value, spawn(handlerInterval, 30, testFn));
});

test('handler interval effects', (t) => {
  const generator = handlerInterval(30, testFn);
  let next = generator.next();
  t.deepEqual(next.value, fork(testFn));
  next = generator.next();
  t.deepEqual(next.value, call(delay, 30));

  // repeat check
  next = generator.next();
  t.deepEqual(next.value, fork(testFn));
  next = generator.next();
  t.deepEqual(next.value, call(delay, 30));
});
