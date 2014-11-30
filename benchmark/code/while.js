'use strict';

module.exports = function pad(res, amount) {
  while (amount--) {
    res = '0' + res;
  }
  return res;
};