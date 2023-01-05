const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const { number } = require("joi");

const userDataSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  fullName: String,
  gender: String,
  caste: String,
  d_o_b: String,
  religion: String,
  blood_group: String,
  mother_tongue: String,
  sic: String,
  regd: String,
  mobile_number: String,
  faculty_advisor: String,
  f_a_mobile_number: String,
  home_contact_no: String,
  program: String,
  branch: String,
  branch_short: String,
  semester: String,
  group: Number,
  batch: String
});

// userSchema.methods.generateAuthToken = function () {
//   const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
//     expiresIn: "7d"
//   });
//   return token;
// };

const UserData = mongoose.model("UserData", userDataSchema);

// const validate = (user) => {
//   const schema = {
//     firstName: joi.string().required().label("First Name"),
//     lastName: joi.string().required().label("Last Name"),
//     email: joi.string().required().email().label("Email"),
//     password: passwordComplexity().required().label("Password")
//   };
//   return joi.validate(user, schema);
// };

module.exports = { UserData };
