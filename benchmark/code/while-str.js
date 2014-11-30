'use strict';

module.exports = function pad(val, amount) {
  var str = '';

  while (amount--) {
    str += '0';
  }

  return str + val;
};
