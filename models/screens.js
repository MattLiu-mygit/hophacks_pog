const mongoose = require('mongoose');

const screensSchema = new mongoose.Schema({
  hearts: {
    type: Array,
  },
  countDown: {
    type: Number,
  },
});

module.exports = mongoose.model('screens', screensSchema);
