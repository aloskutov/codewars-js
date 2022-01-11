'use strict';

const duplicateCount = (text) =>
  text.toLowerCase().split('')
      .filter((e, i, a) => a.indexOf(e) === i)
      .filter((e) => (text.toLowerCase().split('')
          .indexOf(e, text.toLowerCase().split('').indexOf(e) + 1) != -1) ? true : false)
      .length;

module.exports = duplicateCount;
