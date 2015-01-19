'use strict';

var repeat = require('repeat-string');

module.exports = function padLeft(str, num, ch) {
  var padding = '';
  ch = ch || ' ';

  if (!ch) {
    // Breakpoints based on benchmarks
    switch (true) {
      case (num <= 5):
        padding = '     ';
        break;

      case (num <= 25):
        padding = '                         ';
        break;

      case (num <= 100):
        padding = '                                                                                                    ';
        break;
      case (num <= 200):
        padding = '                                                                                                                                                                                                        ';
        break;
      case (num > 200):
        return repeat((ch), num) + str;
    }
  } else {
    return repeat((ch), num) + str;
  }

  return (padding + str).slice(-num - str.length);
};

