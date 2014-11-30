'use strict';

module.exports = function repeat(val, amount) {
  if (+amount === 0) {
    return val;
  }
  return new Array(amount + 1).join('0') + val;
};
