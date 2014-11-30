/*!
 * pad-left <https://github.com/jonschlinkert/pad-left>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var repeat = require('repeat-string');

module.exports = function padLeft(val, num, str) {
  var padding = '';

  // Breakpoints based on benchmarks to use the fastest approach
  // for the given number of zeros
  if (num <= 5 && !str) {
    padding = '00000';
  } else if (num <= 25 && !str) {
    padding = '000000000000000000000000000';
  } else {
    return repeat(str || '0', num) + val;
  }

  return (padding + val).slice(-num - val.length);
};
