const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  short: {
    type: String,
    required: true,
    default: ''
  },
  full: {
    type: String,
    required: false,
    default: ''
  },
  highscore: {
    type: Number,
  },
});

const Player = mongoose.model('player', playerSchema);

module.exports = Player;
