'use strict';

const anagrams = (word, words) => words.filter((item) => item.split('').sort().join('') === word.split('').sort().join(''));

module.exports = anagrams;
