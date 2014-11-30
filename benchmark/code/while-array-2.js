'use strict';

module.exports = function pad(val, num) {
  var arr = [];
  var i = 0;

  while (num--) {
    arr[i++] = '0';
  }

  return arr.join('') + val;
};
