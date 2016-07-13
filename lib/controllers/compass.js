module.exports = {
  initialize: {
    value: function(opts, dataHandler) {
      this.io._microbit.subscribeMagnetometerBearing();

      if (opts.freq) {
        this.io._microbit.writeMagnetometerPeriod(opts.freq);
      }

      this.io._microbit.on('magnetometerBearingChange', dataHandler);
    }
  },
  toScaledHeading: {
    value: function(raw) {
      return raw;
    }
  }
};
