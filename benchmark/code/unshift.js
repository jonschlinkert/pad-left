'use strict';

module.exports = function pad(str, num, ch) {
  ch = ch || ' ';
  var res = [str];

  while (num--) {
    res.unshift(ch);
  }

  return res.join('');
};
