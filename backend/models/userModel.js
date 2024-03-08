const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Name"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please Enter Email"],
  },
  password: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: [true, "Please enter Mobile Number"],
  },
  documents: [
    {
      type: String,
    },
  ],
  address: {
    line1: {
      type: String,
      required: [true, "line 1 of address is required"],
    },
    line2: {
      type: String,
    },
    zipcode: {
      type: String,
      required: [true, "zipcode is required"],
    },
    city: {
      type: String,
      required: [true, "please enter city name"],
    },
    state: {
      type: String,
      required: [true, "please enter state"],
    },
    contry: {
      type: String,
      required: [true, "please enter contry"],
    },
  },
  appointements: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
    },
  ],
  notifications: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Notification",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
