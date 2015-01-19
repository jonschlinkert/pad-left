'use strict';

/**
 * for loop with array join
 */

module.exports = function pad(str, num, ch) {
  ch = ch || ' ';
  var arr;

  for (arr = []; 0 < num; num -= 1, arr[num] = ch);
  return arr.join('') + str;
};
