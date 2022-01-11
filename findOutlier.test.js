'use strict';

const findOutflier = require('./findOutlier');

test('Test #1', () => {
  expect(findOutflier([2, 4, 0, 100, 4, 11, 2602, 36])).toBe(11);
});

test('Test #2', () => {
  expect(findOutflier([160, 3, 1719, 19, 11, 13, -21])).toBe(160);
});
