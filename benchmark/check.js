'use strict';

var colors = require('ansi-colors');
var path = require('path');
var glob = require('matched');

/**
 * Sanity check. Run to ensure that all fns return the same result.
 */

var fixtures = glob.sync(__dirname + '/fixtures/de*10.js');

glob.sync(__dirname + '/code/{pad-left,left-pad}.js').forEach(function (fp) {
  var fn = require(path.resolve(__dirname, 'code', fp));
  var name = path.basename(fp, path.extname(fp));

  fixtures.forEach(function (fixture) {
    var base = path.basename(fixture, path.extname(fixture));
    console.log(colors.bold(name + ' [' + base + ']') + ':', fn.apply(fn, require(fixture)));
  });
});
