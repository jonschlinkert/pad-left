'use strict';

/**
 * for loop with array join
 */

module.exports = function pad(val, num) {
  var arr;
  for (arr = []; 0 < num; num -= 1, arr[num] = '0');
  return arr.join('') + val;
};
