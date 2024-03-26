const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please Enter First Name"],
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  mobile: {
    type: String,
    unique: true,
  },
  dob: {
    type: Date,
  },
  documents: [
    {
      name: {
        type: String,
        required: true,
      },
      degree: {
        type: String,
        enum: ["MBBS", "BHMS", "BAMS"],
      },
      isVerified: {
        type: Boolean,
        default: false,
      },
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
  gender: {
    type: String,
  },
  hospitalName: {
    type: String,
  },
  hospitalAddress: {
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
  education: [
    {
      degree: {
        type: String,
        required: true,
      },
      yearOfCompletion: {
        type: Number,
        required: true,
      },
      collegeName: {
        type: String,
        required: true,
      },
    },
  ],
  appointements: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
    },
  ],
  notifications: [
    {
      type: String,
      enum: ["reminder", "report"],
    },
  ],
  isVerified: {
    type: Boolean,
    default: false,
  },
});

module.exports = new mongoose.model("Doctor", doctorSchema);
