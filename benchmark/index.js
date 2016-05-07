'use strict';

var util = require('util');
var argv = require('minimist')(process.argv.slice(2));
var Suite = require('benchmarked');

var suite = new Suite({
  fixtures: 'fixtures/{10,100,1000}{-cust*,}.js',
  code: 'code/{pad-left,left-pad}.js',
  cwd: __dirname
});

if (argv.dry) {
  suite.dryRun(function(code, fixture) {
    var result = code.run.apply(code, fixture.content).length;
    console.log(code.key, '>', result);
  });
} else {
  suite.run();
}
