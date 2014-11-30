'use strict';

var repeat = require('repeat-string');

module.exports = function pad(val, amount, str) {
  return repeat(str || '0', amount) + val;
};
