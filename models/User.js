const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  location: 
   {
    city: {type: String, required: false,},
    country: {type: String, required: false,},
    region: {type: String, required: false,},        
    },
  workplace: {
    address: { type: String, required: false},
    name: { type: String, required: false},
    },
  baseWage: { type: Number, required: false, default: 0.00,},
  positions: Array,
  savingsGoal: Number,
  firstName: { type: String, unique: false },
  lastName: { type: String, unique: false },
});

//alert alert-danger <%= el.msg %>
//alert alert-info
// class="h-6 w-6 text-white"


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