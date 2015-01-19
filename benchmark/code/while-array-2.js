'use strict';

module.exports = function pad(val, num, ch) {
  ch = ch || ' ';
  var arr = [];
  var i = 0;

  while (num--) {
    arr[i++] = ch;
  }

  return arr.join('') + val;
};
