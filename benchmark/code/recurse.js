'use strict';

// http://jsperf.com/ways-to-0-pad-a-number/19
module.exports = function pad(str, amount) {
  return ('' + str).length < amount + 1
    ? pad('0' + str, amount)
    : str;
};
