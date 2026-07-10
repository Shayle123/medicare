const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    department: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
    },

    qualification: {
      type: String,
      default: "",
    },

    experience: {
      type: Number,
      default: 0,
    },

    consultationFee: {
      type: Number,
      default: 0,
    },

    available: {
      type: Boolean,
      default: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Doctor", doctorSchema);