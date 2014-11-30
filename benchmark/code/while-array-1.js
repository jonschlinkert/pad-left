'use strict';

module.exports = function pad(val, num) {
  var arr = [];
  while (num--) {
    arr[num] = '0';
  }
  return arr.join('') + val;
};
