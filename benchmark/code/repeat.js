var repeat = require('repeat-string');

module.exports = function (str, num, ch) {
  return repeat(ch || ' ', num) + str;
};