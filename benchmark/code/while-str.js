'use strict';

module.exports = function pad(str, num, ch) {
  ch = ch || ' ';
  var res = '';

  while (num--) {
    res += ch;
  }

  return res + str;
};
