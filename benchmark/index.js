'use strict';

var Suite = require('benchmarked');

var suite = new Suite({
  result: false,
  fixtures: 'fixtures/{1,2,3,5,10,25,50,100,150}.js',
  add: 'code/{current,slice-if}*.js',
  cwd: __dirname
});

suite.run();
