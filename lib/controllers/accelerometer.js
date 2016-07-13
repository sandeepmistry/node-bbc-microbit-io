module.exports = {
  initialize: {
    value: function(opts, dataHandler) {
      this.io._microbit.subscribeAccelerometer();

      if (opts.freq) {
        this.io._microbit.writeAccelerometerPeriod(opts.freq);
      }

      this.io._microbit.on('accelerometerChange', function(dataHandler, x, y, z) {
        dataHandler({
          x: x,
          y: y,
          z: z
        });
      }.bind(this, dataHandler));
    }
  },
  toGravity: {
    value: function(raw) {
      return raw;
    }
  }
};
