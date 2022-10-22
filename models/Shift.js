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
    hour: {type: Number},
    minutes: {type: Number},
    meridiem: {type: String},
  },
  endTime: {
    hour: {type: Number},
    minutes: {type: Number},
    meridiem: {type: String},
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
  }
});

module.exports = mongoose.model("Shift", ShiftSchema);
