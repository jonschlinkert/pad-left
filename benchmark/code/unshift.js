'use strict';

module.exports = function pad(val, amount) {
  var res = [val];

  while (amount--) {
    res.unshift('0');
  }

  return res.join('');
};
