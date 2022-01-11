'use strict';

/**
 * findOutlier
 * @param {array} integers
 * @return {integer}
 */
function findOutlier(integers) {
  const even = integers.filter((e) => e%2 == 0);
  return even.length == 1 ? even[0] : integers.filter((e) => e%2 != 0)[0];
}

module.exports = findOutlier;
