'use strict';

module.exports = function pad(str, num, ch) {
  ch = ch || ' ';
  var arr = [];

  while (num--) {
    arr[num] = ch;
  }
  return arr.join('') + str;
};
