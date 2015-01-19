'use strict';

var repeat = require('repeat-string');

module.exports = function padLeft(str, num, ch) {
  return repeat('          ', num * 10).slice(0, num) + str;
};
