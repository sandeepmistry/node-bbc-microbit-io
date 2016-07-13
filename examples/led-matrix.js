var five = require('johnny-five');
var microbitio = require('../index'); // or require('bbc-microbit-io');

var board = new five.Board({
  io: new microbitio({
    // id: '<id of micro:bit>' // optional
    // address: '<address of microbit>' // optional
  })
});

board.on('ready', function() {
  var matrix = new microbitio.LedMatrix();

  // clear the matrix
  console.log('clearing matrix');
  matrix.clear();

  setTimeout(function() {
    // draw a character
    console.log('drawing: 5');

    matrix.draw('5');
  }, 5 * 1000);

  setTimeout(function() {
    // draw an exclamation using bit mask number array
    console.log('drawing: !');

    var exclamation = [
      0x04,
      0x04,
      0x04,
      0x00,
      0x04
    ];

    matrix.draw(exclamation);
  }, 10 * 1000);

  setTimeout(function() {
    // draw a square using string array
    console.log('drawing: square');

    var square = [
      '11111',
      '10001',
      '10001',
      '10001',
      '11111'
    ];

    matrix.draw(square);
  }, 15 * 1000);
});
