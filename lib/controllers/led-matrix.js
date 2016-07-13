module.exports = {
  OP: {},
  initialize: function(opts) {
    this._data = new Buffer('0000000000', 'hex');
  },
  clear: function(addr) {
    this._data = new Buffer('0000000000', 'hex');

    this.io._microbit.writeLedMatrixState(this._data);
  },
  sendDigit: function(addr, index, code) {
  },
  led: function(addr, row, col, state) {
    if (arguments.length === 3) {
      state = col;
      col = row;
      row = addr;
      addr = undefined;
    }

    var val = this._data[row];

    if (state) {
      val |= (1 << col);
    } else {
      val &= ~(1 << col);
    }

    this.row(addr, row, val);
  },
  row: function(addr, row, val) {
    if (arguments.length === 2) {
      val = row;
      row = addr;
      addr = undefined;
    }

    if (typeof val === 'string') {
      var stringVal = val;

      val = 0;

      for (var i = 0; i < stringVal.length; i++) {
        if (stringVal[i] !== '0') {
          val |= (1 << i);
        }
      }
    }

    this._data[row] = val;

    // debounce drawing, flush after 100 ms
    if (this._drawTimeout) {
      clearTimeout(this._drawTimeout);
    }

    this._drawTimeout = setTimeout(function() {
      this.io._microbit.writeLedMatrixState(this._data);
    }.bind(this), 100);
  },
  scanLimit: function(addr, limit) {
  },
  send: function(addr, opcode, data) {
  }
};
