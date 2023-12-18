const mongoose = require("mongoose");

const quizzEmailSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

const QuizzEmail = mongoose.model("QuizzEmail", quizzEmailSchema);

module.exports = QuizzEmail;
