const mongoose = require("mongoose");

const ShiftSchema = new mongoose.Schema({
  dateWorked: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  hoursWorked: {
    type: Number,
    required: true,
  },
  positionWorked: {
    type: String,
    require: false,
  },
  totalSales: {
    type: Number,
    require: true,
  },
  preTaxSales: {
    type: Number,
    required: false,
  },
  tips: {
    type: Number,
    required: true,
  },
  tipout: {
    type: Number,
    required: true,
  },
  wage: {
    type: Number,
    required: true,
    default: 0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  section: {
    title: String,
    tables: Array,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  break: {
    type: Number,
    required: false,
  }
});

module.exports = mongoose.model("Shift", ShiftSchema);
