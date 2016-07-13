var BBCMicrobitIO = require('./lib/bbc-microbit-io');

BBCMicrobitIO.Controllers = require('./lib/controllers');

BBCMicrobitIO.Accelerometer = require('./lib/accelerometer');
BBCMicrobitIO.Button = require('./lib/button');
BBCMicrobitIO.Compass = require('./lib/compass');
BBCMicrobitIO.LedMatrix = require('./lib/led-matrix');
BBCMicrobitIO.Thermometer = require('./lib/thermometer');

module.exports = BBCMicrobitIO;
