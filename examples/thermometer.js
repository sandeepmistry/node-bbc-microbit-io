var five = require('johnny-five');
var microbitio = require('../index'); // or require('bbc-microbit-io');

var board = new five.Board({
  io: new microbitio({
    // id: '<id of micro:bit>' // optional
    // address: '<address of microbit>' // optional
  })
});

board.on('ready', function() {
var thermometer = new microbitio.Thermometer();

  thermometer.on('change', function(data) {
    console.log('Temperature is ' + data.celsius + '°C');
  });
});
