'use strict';

/**
 * for loop
 */

module.exports = function pad(str, num, ch) {
  var res = '';
  ch = ch || ' ';

  for (var i = 0; i < num; i++) {
    res += ch;
  }

  return res + str;
};
