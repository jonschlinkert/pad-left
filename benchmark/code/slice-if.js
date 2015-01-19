'use strict';

var repeat = require('repeat-string');

module.exports = function padLeft(str, num, ch) {
  var res = '';
  ch = ch || ' ';

  if (num <= 2 && !ch) {
    res = '  ';
  } else if (num <= 3 && !ch) {
    res = '   ';
  } else if (num <= 5 && !ch) {
    res = '     ';
  } else if (num <= 25 && !ch) {
    res = '                         ';
  } else if (num <= 50 && !ch) {
    res = '                                                  ';
  } else if (num <= 100 && !ch) {
    res = '                                                                                                    ';
  } else {
    return repeat(ch, num) + str;
  }

  return pad(res + str, num, str.length);
};

function pad(lead, a, b) {
  return lead.slice(a - b);
}
