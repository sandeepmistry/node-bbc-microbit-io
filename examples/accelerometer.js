var five = require('johnny-five');
var microbitio = require('../index'); // or require('bbc-microbit-io');

var board = new five.Board({
  io: new microbitio({
    // id: '<id of micro:bit>' // optional
    // address: '<address of microbit>' // optional
  })
});

board.on('ready', function() {
  var accelerometer = new microbitio.Accelerometer();

  accelerometer.on('change', function() {
    console.log('X: %d', this.x);
    console.log('Y: %d', this.y);
    console.log('Z: %d', this.z);
  });
});
