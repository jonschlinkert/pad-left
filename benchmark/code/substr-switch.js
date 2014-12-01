'use strict';

var repeat = require('repeat-string');

module.exports = function padLeft(val, num) {
  var padding = '';

  // Breakpoints based on benchmarks
  switch (true) {
    case (num <= 5):
      padding = '00000';
      break;
    case (num <= 25):
      padding = '000000000000000000000000000';
      break;
    case (num <= 100):
      padding = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
      break;
    case (num <= 200):
      padding = '0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
      break;
    case (num > 200):
      return repeat('0', num) + val;
  }

  return (padding + val).substr(-num - val.length);
};

