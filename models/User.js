const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: { type: String },
  lastName: { type: String},
  location: {
  country: {type: String},
  region: {type: String},
  city: {type: String},
  },
  savingsGoal: {type: Number, default: 0},
  employment: {
    workplaces: [{  
      name: {type: String},
      location: {
        address: {type: String},
        zippostal: {type: String},
        city: {type: String},
        region: {type: String},
        country: {type: String},
      },
      positions: 
        [{
          title: {type: String},
          baseWage: {type: Number},
          tipout: {type: Number},
        }]
      }],
      sections: [{
        name: {type: String},
        tables: {type: Array},
      }]
    }  
});


// Password hash middleware.

UserSchema.pre("save", function save(next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

// Helper method for validating user's password.

UserSchema.methods.comparePassword = function comparePassword(
  candidatePassword,
  cb
) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

module.exports = mongoose.model("User", UserSchema);