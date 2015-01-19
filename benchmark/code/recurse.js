'use strict';

/**
 * Source: http://jsperf.com/ways-to-0-pad-a-number/19
 */

module.exports = function pad(str, num, ch) {
  return (str.toString().length < num + 1)
    ? pad((ch || ' ') + str, num, ch)
    : str;
};
