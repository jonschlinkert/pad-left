/*!
 * pad-left <https://github.com/jonschlinkert/pad-left>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var pad = require('./');

describe('pad left', function () {
  it('should return the string when no padding amount is passed.', function () {
    pad('abc').should.equal('abc');
  });

  it('should pad the specified number of zeros.', function () {
    pad('abc', 10).should.equal('          abc');
    pad('abc', 100).should.equal('                                                                                                    abc');
    pad('abc', 300).should.equal('                                                                                                                                                                                                                                                                                                            abc');
  });

  it('should pad using the given string.', function () {
    pad('abc', 10, '~').should.equal('~~~~~~~~~~abc');
    pad('abc', 100, '~').should.equal('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~abc');
    pad('abc', 300, '~').should.equal('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~abc');
  });
});

