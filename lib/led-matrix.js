var util = require('util');

var five = require('johnny-five');

var Controllers = require('./controllers');
var font = require('./font');

function LedMatrix(opts) {
  opts = opts || {};

  opts.isMatrix = true;
  opts.controller = Controllers.LedMatrix;

  five.LedControl.call(this, opts);
}

util.inherits(LedMatrix, five.LedControl);

LedMatrix.prototype.draw = function(addr, chr) {
  if (arguments.length === 1) {
    chr = addr;
  }

  if (Array.isArray(chr) && chr.length == 5) {
    if (typeof(chr[0]) === 'string') {
      for (var i = 0; i < 5; i++) {
        chr[i] += '000';
      }

      chr[5] = chr[6] = chr[7] = '00000000';
    } else if (typeof(chr[0]) === 'number') {
      chr[5] = chr[6] = chr[7] = 0;
    }
  } else if (typeof(chr) === 'string') {
    chr = chr.charCodeAt(0);

    if (chr < font.start || chr > font.end) {
      chr = ' '.charCodeAt(0);
    }

    var fontIndex = (chr - font.start) * font.height;

    return this.draw(font.data.slice(fontIndex, fontIndex + font.height));
  }

  return five.LedControl.prototype.draw.call(this, null, chr);
};

module.exports = LedMatrix;
