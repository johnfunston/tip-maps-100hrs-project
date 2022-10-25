const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const ShiftSchema = new mongoose.Schema({
  atWorkplace: {
    type: String,
    required: false,
  },
  dateWorked: {
    type: Date,
    required: true,
    default: Date.now,
  },
  hoursWorked: {
    type: Number,
    required: true,
  },
  startTime: {
    type: String, 
    required: true,
  },
  endTime: {
   type: String,
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
  },
  createdByUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  section: {
    title: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  break: {
    type: Number,
    required: false,
  },
  comment: {
    type: String,
    required: false,
  },
  rating: {
    type: Number,
    required: false,
  }
});

module.exports = mongoose.model("Shift", ShiftSchema);
