/*!
 * pad-left <https://github.com/jonschlinkert/pad-left>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License
 */

'use strict';

require('mocha');
require('should');
var pad = require('./');

describe('pad left', function() {
  it('should return the string when no padding amount is passed.', function() {
    pad('abc').should.equal('abc');
    pad('abc').should.equal('abc', 0);
  });

  it('should pad the specified number of zeros.', function() {
    pad('abc', 10).should.equal('       abc');
    pad('abc', 100).should.equal('                                                                                                 abc');
    pad('abc', 300).should.equal('                                                                                                                                                                                                                                                                                                         abc');
  });

  it('should use the given character for padding.', function() {
    var str = 'abcde';
    pad(str, 10, 0).should.equal('00000abcde');
    pad(str, 10, '0').should.equal('00000abcde');
    pad(str, 10, '~').should.equal('~~~~~abcde');
    pad(str, 100, '~').should.equal('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~abcde');
    pad(str, 300, '~').should.equal('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~abcde');
  });

  it('should coerce number to string before padding.', function() {
    pad(123).should.equal('123');
    pad(123, 5).should.equal('  123');
    pad(123, 10, '0').should.equal('0000000123');
  });
});
