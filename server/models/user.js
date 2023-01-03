const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "7d"
  });
  return token;
};

const User = mongoose.model("User", userSchema);

const validate = (user) => {
  const schema = {
    firstName: joi.string().required().label("First Name"),
    lastName: joi.string().required().label("Last Name"),
    email: joi.string().required().email().label("Email"),
    password: passwordComplexity().required().label("Password")
  };
  return joi.validate(user, schema);
};

module.exports = { User, validate };
