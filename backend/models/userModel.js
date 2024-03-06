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
      required: true,
    },
    line2: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    contry: {
      type: String,
      required: true,
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

mongoose.export = new mongoose.model("User", userSchema);
