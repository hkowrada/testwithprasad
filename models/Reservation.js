const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  persons: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Cancelled"],
    default: "Pending",
  },
});

module.exports = Reservation = mongoose.model(
  "reservations",
  ReservationSchema
);
