var five = require('johnny-five');
var microbitio = require('../index'); // or require('bbc-microbit-io');

var board = new five.Board({
  io: new microbitio({
    // id: '<id of micro:bit>' // optional
    // address: '<address of microbit>' // optional
  })
});

board.on('ready', function() {
  var compass = new microbitio.Compass();

  compass.on('change', function() {
    console.log('change');
    console.log('  heading : ', Math.floor(this.heading));
    console.log('  bearing : ', this.bearing.name);
    console.log('--------------------------------------');
  });
});
