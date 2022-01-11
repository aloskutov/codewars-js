'use strict';


const arrayDiff = (a, b) => a.filter((e) => !b.includes(e));

module.exports = arrayDiff;
