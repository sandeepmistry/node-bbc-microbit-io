var util = require('util');

var five = require('johnny-five');

var Controllers = require('./controllers');

function Button(opts) {
  if (typeof(opts) === 'string') {
    opts = {
      pin: opts
    };
  }

  opts = opts || {};

  opts.controller = Controllers.Button;

  five.Button.call(this, opts);
}

util.inherits(Button, five.Button);

module.exports = Button;
