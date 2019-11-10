var mongoose = require("mongoose");

const Candidateschema = new mongoose.Schema({
  name: {
    type: String,
    unique: false,
    required: true
  },

  position: {
    type: String,
    unique: false,
    required: true
  },
  location: {
    type: String,
    unique: false,
    required: true
  },
  avail: {
    type: Number,
    unique: false,
    required: true
  },
  years: {
    type: Number,
    unique: false,
    required: true
  }
});

const Candidate = mongoose.model("Candidate", Candidateschema);

module.exports = Candidate;
