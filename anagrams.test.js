'use strict';

const anagrams = require('./anagrams');

test('Test #1', () => {
  expect(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])).toStrictEqual(['aabb', 'bbaa']);
});

test('Test #2', () => {
  expect(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])).toStrictEqual(['carer', 'racer']);
});

test('Test #3', () => {
  expect(anagrams('laser', ['lazing', 'lazy', 'lacer']) ).toStrictEqual([]);
});
