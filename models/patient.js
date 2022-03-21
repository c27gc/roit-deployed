const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
  ticketCount: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
  // consultant : [new Schema({
  //     cons: {type: Array},
  // }, {strict: false})
  // ]
});

module.exports = Ticket = mongoose.model("tickets", TicketSchema);