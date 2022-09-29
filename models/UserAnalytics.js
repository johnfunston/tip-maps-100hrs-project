const mongoose = require("mongoose");
const Shift = require("./Shift");
const User = require("./User");

const UserAnalyticsSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  totalShiftsWorked: {type: Number},
  hoursForPeriod: {
    today: {type: Number},
    sevenDays: {type: Number},
    thirtyDays: {type: Number},
    oneYear: {type: Number},
  },
  salesForPeriod: {
    today: {type: Number},
    sevenDays: {type: Number},
    thirtyDays: {type: Number},
    oneYear: {type: Number},
  },
  tipsForPeriod: {
    today: {type: Number},
    sevenDays: {type: Number},
    thirtyDays: {type: Number},
    oneYear: {type: Number},
  },
  tipPercentageForPeriod: {
    today: {type: Number},
    sevenDays: {type: Number},   
    thirtyDays: {type: Number},
    oneYear: {type: Number},
  },
  earningsForPeriod: {
    today: {type: Number},
    sevenDays: {type: Number},   
    thirtyDays: {type: Number},
    oneYear: {type: Number},
  },


});

module.exports = mongoose.model("UserAnalytics", UserAnalyticsSchema);
