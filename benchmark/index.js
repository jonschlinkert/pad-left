/*!
 * uppercut <https://github.com/jonschlinkert/uppercut>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var Suite = require('benchmarked');

var suite = new Suite({
  result: false,
  fixtures: 'fixtures/{1,2,3,5,10,25,50,100,150}.js',
  add: 'code/{repeating,slice}*.js',
  cwd: __dirname
});

suite.run();
