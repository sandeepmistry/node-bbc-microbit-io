var util = require('util');

var five = require('johnny-five');

var Controllers = require('./controllers');

function Thermometer(opts) {
  opts = opts || {};

  opts.controller = Controllers.Thermometer;

  five.Thermometer.call(this, opts);
}

util.inherits(Thermometer, five.Thermometer);

module.exports = Thermometer;
