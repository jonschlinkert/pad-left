'use strict';

let repeat = require('repeat-string');

module.exports = (string, num, ch = " ") => {
  /* should be of string type */
  if (typeof string !== "string") {
    throw new Error(": argument 'string' needs to be of String type");
  }
  /* should be of integer type */
  else if (Number.isNaN(num) || !Number.isInteger(num)) {
    throw new Error(": argument 'num' needs to be of Integer type");
  }
  /* should be of string type */
  else if (typeof ch !== "string") {
    throw new Error(": argument 'ch' needs to be of String type");
  }
  else {
    return repeat(ch, num - string.length) + string;
  }
}
