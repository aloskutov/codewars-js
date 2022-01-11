'use strict';

const countSmileys = require('./countSmileys');

describe('Basic testing', function() {
  it('', () => {
    expect(countSmileys([])).toBe(0);
    expect(countSmileys([':D', ':~)', ';~D', ':)'])).toBe(4);
    expect(countSmileys([':)', ':(', ':D', ':O', ':;'])).toBe( 2);
    expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toBe(1);
  });
});
