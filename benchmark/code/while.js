'use strict';

module.exports = function pad(str, num, ch) {
  ch = ch || ' ';

  while (num--) {
    str = ch + str;
  }

  return str;
};