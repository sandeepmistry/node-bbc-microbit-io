var util = require('util');

var five = require('johnny-five');

var Controllers = require('./controllers');

function Accelerometer(opts) {
  opts = opts || {};

  opts.controller = Controllers.Accelerometer;

  five.Accelerometer.call(this, opts);
}

util.inherits(Accelerometer, five.Accelerometer);

module.exports = Accelerometer;
