const mongoose = require("mongoose");
const validator = require("validator");

const userMessageSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    minLength: 3,
  },
  email: {
    type: String,
    require: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  number: {
    type: Number,
    require: true,
    min: 10,
  },
  msg: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//creating Model...

const userMsg = new mongoose.model("userMsg", userMessageSchema);

module.exports = userMsg;
