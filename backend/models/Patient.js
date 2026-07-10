const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  { 
    patientId: {
      type: String,
      unique: true,
    },

    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },

    age: {
      type: Number,
      required: true,
      min: 0,
      max: 120,
    },

    dateOfBirth: {
      type: Date,
    },

    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },

    phone: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      sparse: true,
    },

    address: {
      type: String,
    },

    emergencyContact: {
      name: String,
      phone: String,
      relation: String,
    },

    medicalHistory: {
      type: String,
      default: "",
    },

    allergies: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Auto Generate Patient ID
patientSchema.pre("save", async function (next) {
  if (!this.patientId) {
    const count = await mongoose.model("Patient").countDocuments();
    this.patientId = `PAT${1000 + count + 1}`;
  }
  next();
});

// Search Index
patientSchema.index({
  firstName: "text",
  lastName: "text",
  phone: "text",
  patientId: "text",
});

module.exports = mongoose.model("Patient", patientSchema);