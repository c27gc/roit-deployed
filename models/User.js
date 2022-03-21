const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  idNumber: {
    type: Number,
    default: 0
  },
  address: {
    type: String,
    default: 0
  },
  ticket: {
    type: Array,
    default: []
  },
  nftId: {
    type: Array,
    default: []
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);
