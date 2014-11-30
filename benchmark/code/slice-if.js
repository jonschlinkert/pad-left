'use strict';

var repeat = require('repeat-string');

module.exports = function padLeft(val, num) {
  var padding = '';

  if (num <= 2) {
    padding = '00';
  } else if (num <= 3) {
    padding = '000';
  } else if (num <= 5) {
    padding = '00000';
  } else if (num <= 25) {
    padding = '000000000000000000000000000';
  } else if (num <= 50) {
    padding = '0000000000000000000000000000000000000000000000000000';
  } else if (num <= 100) {
    padding = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
  } else {
    return repeat('0', num) + val;
  }

  return (padding + val).slice(-num - val.length);
};
