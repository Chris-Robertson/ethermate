const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExchangeSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required'],
  },
  minBuy: {
    type: Number,
  },
  amountAtMin: {
    type: Number,
  },
});

const Exchange = mongoose.model('exchange', ExchangeSchema);

module.exports = Exchange;
