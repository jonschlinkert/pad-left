/*!
 * based on repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014 Jon Schlinkert
 * Licensed under the MIT License
 */

'use strict';

module.exports = function pad(val, amount, str) {
  str = str || '0';

  var res = '';
  while (amount > 0) {
    if (amount & 1) {
      res += str;
    }
    amount >>= 1;
    str += str;
  }
  return res + val;
};