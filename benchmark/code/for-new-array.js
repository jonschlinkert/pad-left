'use strict';

/**
 * for loop, with new Array
 */

module.exports = function pad(str, num, ch) {
  ch = ch || ' ';

  for (var i = 0, res = new Array(num); i < num;) {
    res[i++] = ch;
  }

  return res.join('') + str;
};
