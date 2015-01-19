'use strict';

var repeat = require('repeat-string');

module.exports = function padLeft(str, num, ch) {
  var res = '';
  ch = ch || ' ';

  if (!ch) {
    // Breakpoints based on benchmarks
    switch (true) {
      case (num <= 5):
        res = '     ';
        break;

      case (num <= 25):
        res = '                         ';
        break;

      case (num <= 100):
        res = '                                                                                                    ';
        break;
      case (num <= 200):
        res = '                                                                                                                                                                                                        ';
        break;
      case (num > 200):
        return repeat((ch), num) + str;
    }
  } else {
    return repeat((ch), num) + str;
  }

  return (res + str).substr(-num - str.length);
};

