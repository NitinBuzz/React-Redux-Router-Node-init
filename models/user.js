const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const userSchema = new Schema({
  // email: email,
  // dateOfBirth: dob,
  // name,
  // city,
  // country,
  // password: password
  email: { type: String, unique: true, lowercase: true },
  dateOfBirth: Date,
  name: String,
  city: String,
  country: String,
  password: String,
  createdAt: Date
});

userSchema.pre("save", function(next) {
  const user = this;
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};
const NodelClass = mongoose.model("user", userSchema);

module.exports = NodelClass;
