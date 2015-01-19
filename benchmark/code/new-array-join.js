'use strict';

module.exports = function repeat(str, num, ch) {
  if (+num === 0) {
    return str;
  }
  return new Array(num + 1).join(ch || ' ') + str;
};
