var five = require('johnny-five');
var microbitio = require('../index'); // or require('bbc-microbit-io');

var board = new five.Board({
  io: new microbitio({
    // id: '<id of micro:bit>' // optional
    // address: '<address of microbit>' // optional
  })
});

board.on('ready', function() {
  var buttonA = new microbitio.Button('A');
  var buttonB = new microbitio.Button('B');

  buttonA.on('hold', function() {
    console.log('Button A held');
  });

  buttonA.on('press', function() {
    console.log('Button A pressed');
  });

  buttonA.on('release', function() {
    console.log('Button A released');
  });

  buttonB.on('hold', function() {
    console.log('Button B held');
  });

  buttonB.on('press', function() {
    console.log('Button B pressed');
  });

  buttonB.on('release', function() {
    console.log('Button B released');
  });
});
