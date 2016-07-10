var util = require('util');

var debug = require('debug');

var BoardIO = require('board-io');
var BBCMicrobit = require('bbc-microbit');

function BBCMicrobitIO(options) {
  // call super constructor
  BoardIO.call(this, {
    quiet: true
  });

  this.name = 'BBC micro:bit';
  this.defaultLed = 0;

  var analogChannel = 0;

  for (var i = 0; i <= 20; i++) {
    var pin = {
      name: i + '',
      supportedModes: [0, 1],
      mode: -1,
      report: 0,
      analogChannel: 127
    };

    if (i <= 4) {
      pin.supportedModes.push(2);
      pin.analogChannel = analogChannel;

      analogChannel++;
    }

    this._pins.push(pin);
  }

  if (options.id) {
    BBCMicrobit.discoverById(options.id, this._onDiscover.bind(this));
  } else if (options.address) {
    BBCMicrobit.discoverById(options.address, this._onDiscover.bind(this));
  } else {
    BBCMicrobit.discover(this._onDiscover.bind(this));
  }
}

util.inherits(BBCMicrobitIO, BoardIO);

BBCMicrobitIO.prototype.normalize = function(pin) {
  if (typeof(pin) === 'string') {
    pin = parseInt(pin);
  }

  return pin;
};

BBCMicrobitIO.prototype.pinMode = function(pin, mode) {
  debug('pinMode', pin, mode);

  pin = this.normalize(pin);

  this._pins[pin].mode = mode;

  if (mode === 0) {
    this._microbit.pinDigital(pin);
    this._microbit.pinInput(pin);
  } else if (mode === 1) {
    this._microbit.pinDigital(pin);
    this._microbit.pinOutput(pin);
  } else if (mode === 2) {
    this._microbit.pinAnalog(pin);
    this._microbit.pinInput(pin);
  }

  return this;
};

BBCMicrobitIO.prototype.analogRead = function(pin, handler) {
  debug('analogRead', pin);

  return this;
};

BBCMicrobitIO.prototype.digitalWrite = function(pin, value) {
  debug('digitalWrite', pin, value);

  pin = this.normalize(pin);

  this._microbit.writePin(pin, value);

  return this;
};

BBCMicrobitIO.prototype.digitalRead = function(pin, handler) {
  debug('digitalRead', pin);

  return this;
};

BBCMicrobitIO.prototype._onDiscover = function(microbit) {
  debug('on discover', microbit);

  this._microbit = microbit;

  this._microbit.on('pinDataChange', this._onPinDataChange.bind(this));

  this._microbit.connectAndSetUp(function() {
    this.emit('connect');

    this._microbit.subscribePinData(function() {
      this.emit('ready');
    }.bind(this))
  }.bind(this));
};

BBCMicrobitIO.prototype._onPinDataChange = function(pin, value) {
  var mode = this._pins[pin].mode;

  if (mode === 0) {
    this.emit('digital-read-' + pin, value);
  } else if (mode === 2) {
    this.emit('analog-read-' + pin, value);
  }
};

module.exports = BBCMicrobitIO;
