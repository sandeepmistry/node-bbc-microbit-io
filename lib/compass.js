var util = require('util');

var five = require('johnny-five');

var Controllers = require('./controllers');

function Compass(opts) {
  opts = opts || {};

  opts.controller = Controllers.Compass;

  five.Compass.call(this, opts);
}

util.inherits(Compass, five.Compass);

module.exports = Compass;
