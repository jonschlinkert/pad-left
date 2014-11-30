'use strict';

module.exports = function pad(val, amount) {
  var res = '';
  for (var i = 0; i < amount; i++) {
    res += '0';
  }
  return res + val;
};
