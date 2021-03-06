var five = require('johnny-five');
var microbitio = require('../index'); // or require('bbc-microbit-io');

var board = new five.Board({
  io: new microbitio({
    // id: '<id of micro:bit>' // optional
    // address: '<address of microbit>' // optional
  })
});

board.on('ready', function() {
  // Create an LED for pin 0
  var led = new five.Led(0);

  // Blink every half second
  led.blink(500);
});
