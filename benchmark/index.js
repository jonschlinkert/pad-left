'use strict';

var Suite = require('benchmarked');

var suite = new Suite({
  result: false,
  fixtures: 'fixtures/def*.js',
  add: 'code/{pad-left,left-pad}.js',
  cwd: __dirname
});

suite.run();
