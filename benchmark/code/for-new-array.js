'use strict';

/**
 * for loop, with new Array
 */

module.exports = function pad(val, amount) {
  for (var i = 0, res = new Array(amount); i < amount;) {
    res[i++] = 0;
  }
  return res.join('') + val;
};
