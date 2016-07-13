module.exports = {
  initialize: {
    value: function(opts, dataHandler) {
      this.io._microbit.subscribeTemperature();

      if (opts.freq) {
        this.io._microbit.writeTemperaturePeriod(opts.freq);
      }

      this.io._microbit.on('temperatureChange', dataHandler);
    }
  },
  toCelsius: {
    value: function(raw) {
      return raw;
    }
  }
};
