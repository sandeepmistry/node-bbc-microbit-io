module.exports = {
  initialize: {
    value: function(opts, dataHandler) {
      if (opts.pinValue === 'A') {
        this.io._microbit.subscribeButtonA();

        this.io._microbit.on('buttonAChange', function(dataHandler, value) {
          if (value === 0 || value === 1) {
            dataHandler(value);
          }
        }.bind(this, dataHandler));
      } else if (opts.pinValue === 'B') {
        this.io._microbit.subscribeButtonB();

        this.io._microbit.on('buttonBChange', function(dataHandler, value) {
          if (value === 0 || value === 1) {
            dataHandler(value);
          }
        }.bind(this, dataHandler));
      }
    }
  },
  toBoolean: {
    value: function(raw) {
      return (raw !== 0);
    }
  }
};
