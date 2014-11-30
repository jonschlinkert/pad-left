'use strict';

module.exports = function pad(val, amount) {
  for (var i = 0; i < amount; i++) {
    val = '0' + val;
  }
  return val;
};
